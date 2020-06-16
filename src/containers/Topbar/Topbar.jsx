import React, { useState } from 'react'

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { ReactComponent as BagIcon } from "../../assets/icons/bag.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";

import { CartModal, SearchModal, WishModal } from '../../components'

import "./Topbar.scss"

const Topbar = () => {
    const [showCart, setshowCart] = useState(false)
    const [showWish, setshowWish] = useState(false)
    const [showSearch, setshowSearch] = useState(false)
    const { quantity } = useSelector((state) => state.cart)
    console.log(quantity)

    function handleCart() {
        setshowCart(!showCart)
        setshowWish(false)
        setshowSearch(false)
    }
    function handleWish() {
        setshowWish(!showWish)
        setshowSearch(false)
        setshowCart(false)
    }
    function handleSearch() {
        setshowSearch(!showSearch)
        setshowCart(false)
        setshowWish(false)
    }

    return (
        <nav className="topbar" data-testid="topbar">
            <div className="container">
                <Link to="/" className='topbar__logo'>
                    <div className='topbar__logo--title'>
                        <p> Fashionista </p>
                    </div>
                </Link>

                <div className="topbar__group">
                    <div className='topbar__icon'>
                        <button className='topbar__icon--search'
                            onClick={handleSearch}
                        >
                            < SearchIcon />
                        </button>
                    </div>
                    <div className='topbar__icon'>
                        <button className='topbar__icon--wish'
                            onClick={handleWish}>
                            <HeartIcon />
                        </button>
                    </div>
                    <div className='topbar__icon'>
                        <button className='topbar__icon--cart'
                            onClick={handleCart}>
                            <BagIcon />
                            <sup className='topbar__counter'>
                                <span className='topbar__counter-value'>{quantity}</span>
                            </sup>
                        </button>
                    </div>
                </div>
            </div>
            <div className='modal'>
                {showCart && <CartModal className='cartmodal' handleCart={handleCart} />}
                {showWish && <WishModal className='wishmodal' handleWish={handleWish} />}
                {showSearch && <SearchModal className='searchmodal' handleSearch={handleSearch} />}
            </div>

        </nav>
    );
}

export default Topbar