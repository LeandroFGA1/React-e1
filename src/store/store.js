import {configureStore} from "@reduxjs/toolkit";
import { cartActions, origenSlice, searchDisplay } from "./slice";

export default configureStore({
    reducer:{
        unValor:origenSlice.reducer,
        rollOutSearch:searchDisplay.reducer,
        cartAction:cartActions.reducer
    }
})