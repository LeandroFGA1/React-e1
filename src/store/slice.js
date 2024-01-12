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

export const cartActions = createSlice({
    name:"cartAction",
    initialState:{
        count:0,
        cartItems: []
    },
    reducers:{
        incrementCountCart: (state)=>{
            console.log("aaaaa")
            state.count = state.count + 1;
        },
        restCountCart: (state)=>{
            console.log("wwwww")
            state.count = state.count -1
        }
    }
})


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
export const {incrementCountCart, restCountCart} = cartActions.actions;