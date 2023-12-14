import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cartActions",
    initialState: {
        lista: [],
        count:0
        
    },
    reducers: {
        addCart: (state, action) => {
            const foundIndex = state.lista.findIndex((element) => element.nombre === action.payload);

            if (foundIndex !== -1) {
                state.lista[foundIndex].units += 1;
                state.count += 1;
                console.log('Units incrementado para:', action.payload);
            } else {
                state.lista = [...state.lista, { nombre: action.payload, units: 1 }];
                state.count += 1
                console.log('Elemento agregado:', action.payload);
            }
        },
        deleteCart: (state, action) => {
            const foundIndex = state.lista.findIndex((element) => element.nombre === action.payload);

            if (foundIndex !== -1) {
                state.lista[foundIndex].units -= 1;
                state.count -= 1;
                if (state.lista[foundIndex].units === 0) {
                    state.lista.splice(foundIndex, 1);
                    console.log('Elemento eliminado:', action.payload);
                } 
                else {
                    console.log('Units reducido para:', action.payload);
                }
            } else {
                console.log('Elemento no encontrado:', action.payload);
            }
        },
        sumUnits: (state, action) => {
            const totalUnits = state.lista.reduce((acc, element) => acc + element.units, 0);
            console.log('Total de units:', totalUnits);
        }
    },
});



export const  origenSlice =createSlice({
    name:"unValor",
    initialState:{miNombre:"pepe", edad:18,
    bibliotecas:[{nombre:"react",inicio:2013},{nombre:"redux",inicio:2015}]
    },
    reducers:{
        guardarMiNombre:(state,action)=>{
            state.miNombre =action.payload;
        },
        modificarUnValor:(state,action)=>{
            const {indice, nuevoNombre, nuevoInicio} = action.payload;
            state.bibliotecas[indice].nombre = nuevoNombre;
            state.bibliotecas[indice].inicio = nuevoInicio;
        },
        agregarUnValor:(state,action)=>{
            const {nuevoNombre, nuevoInicio} = action.payload;
            state.bibliotecas = [...state.bibliotecas,{nombre:nuevoNombre,inicio:nuevoInicio}]
        },
        eliminarUnValor:(state,action)=>{
            state.bibliotecas = state.bibliotecas.filter(valor=>valor.nombre != action.payload)
        }
    }
});

export const  otroSlice =createSlice({
    name:"otroValor",
    initialState:{puntuacion:0},
    reducers:{
        incremetentarPuntacion:(state)=>{
            state.puntuacion = state.puntuacion + 1;
        }
    }
});

export const {guardarMiNombre} =origenSlice.actions;
export const {incremetentarPuntacion} =otroSlice.actions;
export const {modificarUnValor} =origenSlice.actions;
export const {agregarUnValor} =origenSlice.actions;
export const {eliminarUnValor} =origenSlice.actions;
export const {addCart} =cartSlice.actions;
export const {deleteCart} = cartSlice.actions;
export const {sumUnits} = cartSlice.actions;