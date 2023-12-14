import {configureStore} from "@reduxjs/toolkit";
import {cartSlice} from "./misSlice";

export default configureStore({
    reducer:{
        cartActions:cartSlice.reducer
    }
})