
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartList: [],
        amount: 0,
        allPrice:0,
        isChecked:false
    },
    reducers: {
        addToCart: (state, action) => {
            const current = state.cartList.find(p => p.id === action.payload.id);
            if(current){
                current.amount += 1;
            }
            else{
                state.cartList.push({ ...action.payload, amount: 1 });
            }
            
            state.amount += 1;
            state.allPrice +=action.payload.price;
        },
        addAmount: (state, action) => {
            const current = state.cartList.find(p => p.id === action.payload);
            if (current) {
                current.amount += 1;
                state.amount += 1;
                state.allPrice +=current.price;
            }
        },
        subAmount: (state, action) => {
            const current = state.cartList.find(p => p.id === action.payload);
            if (current && current.amount > 1) {
                current.amount -= 1;
                state.amount -= 1;
                state.allPrice -=current.price;
            }
        },
        deleteOne: (state, action) => {
            const current = state.cartList.find(p => p.id === action.payload);
            if (current) {
                state.amount -= current.amount;
                state.cartList = state.cartList.filter(p => p.id !== action.payload);
                state.allPrice -=current.price*current.amount;
            }
        },
        deleteAll: (state, action) => {
            state.cartList = [];
            state.amount = 0;
            state.allPrice = 0;
            state.isChecked = false;
        },
        addDelivery: (state, action) => {
            state.allPrice += 20;
        },
        removeDelivery: (state, action) => {
            state.allPrice -= 20;
        },
        setIsChecked:(state)=>{
            state.isChecked = !state.isChecked;
        },
        handleChange : (state) => {
            state.isChecked = !state.isChecked;
            if (state.isChecked) {
                state.allPrice += 20;
            }
            else {
                state.allPrice -= 20;
            }
        }
    }
});

export const { addToCart, addAmount, subAmount, deleteOne,deleteAll, addDelivery, removeDelivery,setIsChecked,handleChange } = CartSlice.actions;
export default CartSlice.reducer;