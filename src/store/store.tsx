import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./createSlice";

export const Store = configureStore({
    reducer : {
        cart : cartSlice.reducer
    }
})