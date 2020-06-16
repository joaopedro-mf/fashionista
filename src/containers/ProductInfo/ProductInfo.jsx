import React, { useState } from "react";

import { useDispatch } from "react-redux";

import "./ProductInfo.scss";

import { addCart } from '../../actions/cart'

const ProductInfo = ({ product }) => {
    const [size, setSize] = useState('');
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);
    const dispacth = useDispatch()

    function handleSize(size) {
        setSize(size)
    }
    function handleBuy() {
        if (size !== '') {
            dispacth(addCart({
                ...product,
                "sizeSelected": size
            }))
            setSize('')
            setError(false)
            setSucess(true)
            setTimeout(() => setSucess(false), 3000)
        }
        else {
            setError(true)
            setTimeout(() => setError(false), 3000)
        }
    }
    return (
        <section className='productInfo' data-testeid='productInfo'>
            <figure className='productInfo__image'>
                {product.on_sale &&
                    (<div className='productInfo__image--saleIcon'>
                        <span>{product.discount_percentage}</span>
                    </div>
                    )
                }


                {product.image == "" ?
                    <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+indisponível" alt={product.name} />
                    :
                    <img src={product.image} alt={product.name} />
                }


            </figure>
            <div className='productInfo__content'>
                <div className='productInfo__name'>
                    <h2>{product.name}</h2>
                </div>
                <div className='productInfo__prices'>
                    <span>{product.actual_price}</span>
                    {product.on_sale &&
                        <span className='productInfo__prices--sale'>
                            {product.regular_price}
                        </span>
                    }
                </div>

                <div className='productInfo__conditions'>
                    <p>
                        {"ou " + product.installments}
                    </p >

                </div>
                <div className='productInfo__color'>
                    <p>
                        Cor: {product.color}
                    </p>
                </div>

                <div className='productInfo__status'>
                    {sucess && <div className='productInfo__sucess'>
                        Produto Adicionado!
                    </div>}
                    {error && <div className='productInfo__error'>
                        Necessário selecionar tamanho!
                    </div>}
                </div>
                <div className='productInfo__options'>
                    {product.sizes.length > 0 &&
                        <div className='productInfo__sizes'>
                            <p>Escolha o tamanho:</p>
                            <div className='productInfo__size'>
                                {product.sizes.map((element, index) => {
                                    return element.available ?
                                        (<div>
                                            {size === element.size ?
                                                (<button key={index}
                                                    className='productInfo__size--able-selected'
                                                    onClick={() => handleSize(element.size)}>
                                                    {element.size}
                                                </button>)
                                                :
                                                (<button key={index}
                                                    className='productInfo__size--able'
                                                    onClick={() => handleSize(element.size)}
                                                >{element.size}</button>)
                                            }
                                        </div>)
                                        :
                                        (<button key={index} className='productInfo__size--disable'>{element.size}</button>)
                                })}
                            </div>

                        </div>
                    }

                    <button
                        className='productInfo__button'
                        onClick={() => handleBuy()}
                    >
                        Adicionar à Sacola
                    </button>
                </div>
            </div>

        </section>
    )
}

export default ProductInfo;