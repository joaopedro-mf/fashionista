import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Banner, Loading } from "../../components";
import { Catalog } from '../../containers'

import setProducts from '../../actions/products'

import "./HomeRoute.scss";

const HomeRoute = () => {
    const [loading, setLoading] = useState(true);
    const products = useSelector((state) => state.products)
    const dispacth = useDispatch()

    useEffect(() => {
        var url = "	https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog ";
        fetch(url)
            .then((res) => res.json())
            .then(function (res) {
                var products = [];
                res.forEach((item, index) => {
                    var product = { ...item, 'id': index }
                    products.push(product)
                })
                console.log(products)
                dispacth(setProducts(products))
                setLoading(false)
            });

    }, []);

    return (
        <div className='homeRoute' data-testid='homeRoute'>
            <Banner />
            {loading ?
                <Loading />
                :
                <Catalog products={products} />
            }
        </div>
    );
};

export default HomeRoute;