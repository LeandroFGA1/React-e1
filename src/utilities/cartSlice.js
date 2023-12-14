import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    cartItem : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice  = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCard(state,action){
            state.cartItem.push(action.payload)
        }
    }
})


export const {addToCard} =cartSlice.actions;

export default cartSlice.reducer;