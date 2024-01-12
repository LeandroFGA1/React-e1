import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { incrementCountCart, restCountCart } from '../../../store/slice';

const CartContainer = styled.div`
    position: relative;
    input{
        display: none;
        &:checked ~ .drop-toggle-cart{
            display: flex;
        }
    }
    svg{
        color:black;
        width: 25px;
        transform: scaleX(-1);
    }
    label{
        cursor: pointer;
        display: flex;
        align-items: center;
    }
`;

const CountCartBox = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 3px;
    background-color: greenyellow;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    opacity: 0.2;
    
`;
const DropToggleCart = styled.div`
    cursor: default;
    position: absolute;
    top:42.5px;
    width: 250px;
    right: 0;
    min-height: 150px;
    height: fit-content;
    background-color: #fc5e5e;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    filter: drop-shadow(0 2px 2px black);
    h3{
        font-size: 14px;
        border-bottom: 1px solid black;
    }
    span{
        font-size: 10px;
        height: 30px;
        a{
            color:gold;
        }
    }
`;

const Cart = () => {
    const NUMBER_ITEMS_IN_CART = useSelector(state => state.cartAction.count);
    const dispatch = useDispatch();
    const controlCount = ()=>{
        dispatch(incrementCountCart());
    }
    const wea =()=>{
        dispatch(restCountCart())
    }
    const handleCheckboxClick = (e) => {
        e.stopPropagation();
        controlCount();
    };    
    return (
        <CartContainer>
            <input type="checkbox" name="toggle-cart" id="toggle-cart" />
            <label htmlFor="toggle-cart">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" 
                strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <CountCartBox onClick={1}>
                    {NUMBER_ITEMS_IN_CART}
                </CountCartBox>
            </label>
            
            <DropToggleCart className='drop-toggle-cart'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                <h3 onClick={handleCheckboxClick}>YOUR CART IS EMPTY</h3>
                <span onClick={wea}>look for the games you want <a href=''> here</a></span>
            </DropToggleCart>

        </CartContainer>
    )
}

export default Cart