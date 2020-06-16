import React from "react";

import "./HeaderModal.scss";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";

const HeaderModal = ({ name, handleClick }) => {
    return (
        <div className='headerModal' data-testid="headerModal">
            <button className='headerModal__arrow' onClick={handleClick}>
                <ArrowIcon />
            </button>
            <div className='headerModal__name'>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default HeaderModal