import React from "react";

import { CardProduct } from "../../components";

import "./Catalog.scss";


const Catalog = ({ products }) => {
    var { items } = products
    return (
        <section className='catalog' data-testeid='catalog'>
            <div className='container'>
                <div className='catalog__content'>
                    {items.length &&
                        items.map((product, index) => (
                            < CardProduct key={index} info={product} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Catalog;