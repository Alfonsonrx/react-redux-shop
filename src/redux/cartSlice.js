import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            console.log(product);
            state.cart.push(product);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((_, index) => index !== action.payload);
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;