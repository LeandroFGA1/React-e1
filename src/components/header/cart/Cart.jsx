import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import {removeToCard,addToCart,totalCost } from '../../../store/slice';
import { Link } from 'react-router-dom';

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
    top:80px;
    width: 350px;
    right: 0;
    min-height: 150px;
    height: fit-content;
    max-height: 400px;
    background-color:var(--white);
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    overflow-y: auto;
    filter: drop-shadow(0 2px 2px black);
    .is-empty-cart{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h3{
        font-size: 16px;
        border-bottom: 1px solid black;
    }
    span{
        font-size: 12px;
        height: 30px;
        a{
            filter: drop-shadow(1px 0px 0px black)drop-shadow(-1px 0px 0px black)drop-shadow(0 1px 0 black) drop-shadow(0 -1px 0 black);
            color:gold;
        }
    }
    }
    .item-card-container{
        width: 300px;
        height: 40px;
        display: flex;
        align-items: center;
        gap: 2px;
        margin-bottom: 20px;
        overflow: hidden;
        h4{
            width: 80px;
            height: 100%;
            font-size: 12px;
        }
        p{
            width: 65px;
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 14px;
        }
        span{
            width: 40px;
            height: 100%;
            font-size: 14px;
        }
        div{
            width: 70px;
            display: flex;
            justify-content: space-between;
            svg{
                cursor: pointer;
            }
            .svg-add-cart:hover{
                background-color: greenyellow;
            }
            .svg-remove-cart:hover{
                background-color: var(--crimson);
            }
        }
    }
`;

const Cart = () => {
    const NUMBER_ITEMS_IN_CART = useSelector(state => state.cartAction.count);
    const TOTAL_COST = useSelector(state => state.cartAction.total)
    const cartItems = useSelector(state => state.cartAction.cartItems);
    const dispatch = useDispatch();
    const removeUnit = (index)=>{
        dispatch(removeToCard(index));
        dispatch(totalCost());
    }
    const addUnit = (name, price, quantity) => {
        dispatch(
            addToCart({
                name: name,
                price: price,
                quantity: quantity
            })
        );
        dispatch(totalCost());
    }
    return (
        <CartContainer>
            <input type="checkbox" name="toggle-cart" id="toggle-cart" />
            <label htmlFor="toggle-cart">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <CountCartBox >
                    {NUMBER_ITEMS_IN_CART}
                </CountCartBox>
            </label>
            
            <DropToggleCart className='drop-toggle-cart'>
                {cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item,index) => (
                            <div key={item.name} className='item-card-container'>
                                <h4>{item.name}</h4>
                                <p>{(item.price*item.quantity).toFixed(2)}</p>
                                <span>units: {item.quantity}</span>
                                <div >
                                    <svg onClick={() => addUnit(item.name, item.price, item.quantity)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg-add-cart">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                    <svg onClick={()=>removeUnit(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg-remove-cart">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                            </div>

                        ))}
                        <div className='tota-cost-cart'>
                            total: {TOTAL_COST.toFixed(2)}
                        </div>
                    </div>
                ) : (
                    <div className='is-empty-cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                        <h3>YOUR CART IS EMPTY</h3>
                        <span>look for the games you want <Link to={"/store"}> here</Link></span>
                    </div>
                )}
                
            </DropToggleCart>

        </CartContainer>
    )
}

export default Cart