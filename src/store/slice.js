import { createSlice } from "@reduxjs/toolkit";

export const  origenSlice =createSlice({
    name:"unValor",
    initialState:{
        miNombre:"pepe", edad:18,
        bibliotecas:[{nombre:"react",inicio:2013},{nombre:"redux",inicio:2015}]
    },
    reducers:{
        guardarMiNombre:(state,action)=>{
            state.miNombre =action.payload;
        }
    }
});

// slice.js

export const cartActions = createSlice({
    name: "cartAction",
    initialState: {
        count: 0,
        cartItems: [],
    },
    reducers: {
        incrementCountCart: (state) => {
            state.count = state.count + 1;
        },
        restCountCart: (state) => {
            if (state.count > 0){
                state.count = state.count - 1;
            }
            
        },
        removeToCard: (state) =>{
            const itemIndex = state.cartItems.findIndex(item => item.quantity > 0);
            if (itemIndex !== -1) {
                state.cartItems[itemIndex].quantity -= 1;
        
                if (state.cartItems[itemIndex].quantity === 0) {
                    state.cartItems.splice(itemIndex, 1);
                }
            }
            state.count --;
        }
        ,
        addToCart: (state, action) => {
            const { name, price, quantity } = action.payload;
            const existingItem = state.cartItems.find(item => item.name === name);
            if (existingItem){
                existingItem.quantity += 1;
            }else{
                state.cartItems = [...state.cartItems, { name, price, quantity }];
            }
            state.count ++;
        },
    },
});



export const searchDisplay = createSlice({
    name:"rollOutSearch",
    initialState:{isDisplayed:false},
    reducers:{
        changeScreen :(state,action)=>{
            const NAVBAR = document.querySelector(".search-bar");
            if (state.isDisplayed) {
                NAVBAR.style.display="none";
            } else {
                NAVBAR.style.display="flex";;
            }
            state.isDisplayed = !state.isDisplayed;
        }
    }
})

export const {guardarMiNombre} =origenSlice.actions;
export const {changeScreen} = searchDisplay.actions;
export const {incrementCountCart, restCountCart, addToCart,removeToCard} = cartActions.actions;