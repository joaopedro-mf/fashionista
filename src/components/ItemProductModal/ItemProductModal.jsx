import React from "react";
import { Link } from "react-router-dom";

import "./ItemProductModal.scss";

import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";

const ItemProductModal = ({ product, modifier, exclude, handleclose, closemodal }) => {
    return (
        <div className='itemproductModal' data-testid="itemproductModal">
            <Link to={`product/${product.id}`} onClick={closemodal} action="replace" >
                <figure className='itemproductModal__image'>
                    {product.image === "" ?
                        <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+indisponível" alt={product.name} />
                        :
                        <img src={product.image} alt={product.name} />
                    }
                </figure>
                <div className='itemproductModal__description'>
                    <h3 className='itemproductModal__name'>{product.name}</h3>
                    <h4 className='itemproductModal__price'>{product.actual_price}</h4>
                    <h4 className='itemproductModal__conditions'>{"OU " + product.installments}</h4 >
                    {
                        modifier &&
                        <div className='itemproductModal__items'>
                            <button className='itemproductModal__items--add'>+</button>
                            <span className='itemproductModal__items--value'>   1   </span>
                            <button className='itemproductModal__items--rem'>-</button>
                        </div>
                    }

                </div>
            </Link >
            {
                exclude &&
                <button className='itemproductModal__delete'
                    onClick={() => handleclose(product.id)}
                >
                    <DeleteIcon />
                </button>
            }



        </div >
    )
}

export default ItemProductModal