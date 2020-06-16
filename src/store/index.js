import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "../reducers";

const persistConfig = {
    key: 'fashionista',
    storage
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer)
const persistor = persistStore(store);

export { store, persistor }