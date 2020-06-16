import React from "react";

import { useSelector, useDispatch } from "react-redux";

import "./CartModal.scss";

import { OverlayModal, HeaderModal, ItemProductModal } from "../index";

import { removeCart } from '../../actions/cart'



const CartModal = ({ handleCart }) => {
    const { items, subTotal } = useSelector((state) => state.cart)
    const dispacth = useDispatch()

    function handleRemove(id) {
        dispacth(removeCart(id))
    }

    return (
        <div className='cartmodal' data-testid="cartmodal">
            <OverlayModal />
            <div className='cartmodal__content'>
                <HeaderModal name='Sacola de Compras' handleClick={handleCart} />
                <div className='cartmodal__list'>
                    {items.length > 0 &&
                        items.map((product) => (
                            <div>
                                <ItemProductModal product={product}
                                    modifier={true}
                                    exclude={true}
                                    handleclose={handleRemove}
                                    closemodal={handleCart}
                                />
                                <div className='cartmodal__separator' />
                            </div>
                        ))
                    }
                </div>
                <div className='cartmodal__subtotal'>total: R$ {subTotal}</div>
            </div>

        </div>
    )
}

export default CartModal