import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./SearchModal.scss";

import { filterBy } from '../../utils/filter'

import { OverlayModal, HeaderModal, ItemProductModal } from "../index";

const SearchModal = ({ handleSearch }) => {
    const { items } = useSelector((state) => state.products)
    const [result, setResult] = useState([]);

    function handleChangeInput(event) {
        const search = event.target.value;
        if (search !== '') {
            setResult(filterBy(items, search))
        }
        else {
            setResult([])
        }
    }

    return (
        <div className='searchmodal' data-testid="searchmodal">
            <OverlayModal />
            <div className='searchmodal__content'>
                <HeaderModal name='Procurar' handleClick={handleSearch} />
                <input className='searchmodal__input' type="text" placeholder='Procure seu produto ...'
                    onChange={handleChangeInput}
                />
                <div className='wishmodal__list'>
                    {result.length > 0 &&
                        result.map((product) => (
                            <Link to={`product/${product.id}`} onClick={handleSearch} action="replace" >
                                <ItemProductModal product={product} modifier={false} exclude={false} />
                                <div className='cartmodal__separator' />
                            </Link >
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchModal