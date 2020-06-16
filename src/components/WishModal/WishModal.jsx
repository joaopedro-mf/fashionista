import React from "react";

import { useSelector, useDispatch } from "react-redux";

import "./WishModal.scss";

import { OverlayModal, HeaderModal, ItemProductModal } from "../index";

import { ReactComponent as NothingIcon } from "../../assets/icons/nothing.svg";

import { removeWishList } from '../../actions/wishList'

const WishModal = ({ handleWish }) => {
    const { items } = useSelector((state) => state.wish)
    const dispacth = useDispatch()

    function handleRemove(id) {
        dispacth(removeWishList(id))
    }

    return (
        <div className='wishmodal' data-testid="wishmodal">
            <OverlayModal />
            <div className='wishmodal__content'>
                <HeaderModal name='Seus Favoritos' handleClick={handleWish} />
                <div className='wishmodal__list'>
                    {items.length > 0 ?
                        items.map((product) => (
                            <div>
                                <ItemProductModal product={product}
                                    modifier={false}
                                    exclude={true}
                                    handleclose={handleRemove}
                                    closemodal={handleWish}
                                />
                                <div className='cartmodal__separator' />
                            </div>
                        ))
                        :
                        (<div className='wishmodal__nothing'>
                            <NothingIcon />
                        </div>)
                    }
                </div>

            </div>
        </div>
    )
}

export default WishModal