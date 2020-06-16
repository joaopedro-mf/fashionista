import React from "react"
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { Topbar } from "../index";
import Routes from "../../routes";

import { store, persistor } from "../../store";

import "./App.scss";

const App = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <div className='App' data-testid='app'>
                <BrowserRouter>
                    <Topbar />
                    <Routes />
                </BrowserRouter>
            </div>
        </PersistGate>
    </Provider>
);

export default App;