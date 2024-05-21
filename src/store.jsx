import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import features from './Redux/Features'

const persistConfig = {
    key: "root",
    storage: storage,
};
const rootReducers = combineReducers({
    lesson: features,
    // Add other reducers here if needed
});
const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: { curvegadget: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
setupListeners(store.dispatch);

export default store;