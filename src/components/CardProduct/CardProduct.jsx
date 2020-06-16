import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

import { addWishList } from '../../actions/wishList'

import "./CardProduct.scss";

const CardProduct = ({ info }) => {
    const { items } = useSelector((state) => state.wish)
    const dispacth = useDispatch()

    function handleWish(info) {
        if (items.some(e => e.id === info.id)) {
            return
        }
        dispacth(addWishList(info))
    }


    return (
        <div className='product' data-testid="product">

            <figure className='product__image'>
                {info.on_sale &&
                    (<div className='product__image--saleIcon'>
                        <span>{info.discount_percentage}</span>
                    </div>
                    )
                }
                <button className='product__image--heartIcon'
                    onClick={() => handleWish(info)}>
                    {items.some(e => e.id === info.id) ?
                        <HeartIcon className='product__image--heartIcon-selected' />
                        :
                        <HeartIcon />
                    }

                </button>

                <Link to={`product/${info.id}`}
                    className='product__descr--link'
                >
                    {info.image === "" ?
                        <img src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+indisponível" alt={info.name} />
                        :
                        <img src={info.image} alt={info.name} />
                    }
                </Link>

            </figure>

            <div className='product__descr'>
                <Link to={`product/${info.id}`}
                    className='product__descr--link'
                >
                    <h3 className='product__name'>{info.name}</h3>
                    <div className='product__prices'>
                        <span>{info.actual_price}</span>
                        {info.on_sale &&
                            <span className='product__prices--sale'>
                                {info.regular_price}
                            </span>
                        }
                    </div>
                    <div className='product__conditions'>
                        <span>
                            {"OU " + info.installments}
                        </span >
                    </div>
                </Link>
            </div>

        </div>
    )
};

export default CardProduct;