import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./ProductsSlice";
import cartReducer from "./CartSlice";

const store = configureStore({
    reducer: {
        products: productReducer,
        cart:cartReducer
    }
});
export default store;