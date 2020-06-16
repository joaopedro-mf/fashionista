import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../../components";
import { ProductInfo } from '../../containers'

import "./ProductPage.scss";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const { items } = useSelector((state) => state.products)

    const { id } = useParams();

    useEffect(() => {
        setProduct(items[id])
    }, [items, id]);

    return (
        <div className='productPage' data-testid='productPage'>
            {product.name === undefined ?
                <Loading /> :
                <ProductInfo product={product} />
            }

        </div>)
}

export default ProductPage;