import React from "react"
import { Route, Switch } from "react-router-dom";

import HomeRoute from "./HomeRoute/HomeRoute";
import ProductPage from './ProductPage/ProductPage'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomeRoute />
            </Route>
            <Route exact path="/product/:id">
                <ProductPage />
            </Route>
        </Switch>
    )
}

export default Routes