import { createSlice } from "@reduxjs/toolkit";
import { fetchDataAsyncAction } from "./thunk";

const ProductsSlice = createSlice({
    name: "products",
    initialState: { 
        productList: [],
        loading: false,
        error: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsyncAction.pending, (state) => {
                state.loading = true;
                state.productList = [];
                state.error = false;
            })
            .addCase(fetchDataAsyncAction.fulfilled, (state, action) => {
               state.productList = action.payload;
               state.loading = false;
               state.error = false;
            })
            .addCase(fetchDataAsyncAction.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
});

export const { changeProducts } = ProductsSlice.actions;
export default ProductsSlice.reducer;