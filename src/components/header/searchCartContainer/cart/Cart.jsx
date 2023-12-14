import React, { useState } from 'react'
import styled from 'styled-components'
import images from "../../../../assets/images/navbar/navImgs"
import {useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../../../../slice/misSlice';

const CartContainer = styled.div`
    position: relative;
    width: 40px;

`;
const CartHeader = styled.div`
    cursor: pointer;
    position: relative;
    display: flex;
    text-decoration: none;
    align-items: center;
    border-bottom: 3px solid transparent;
    img{
        width: 30px;
        height: 30px;
        filter: opacity(60%);
    }
    &:hover{
        border-bottom: 3px solid #979797;
        img{
            filter: opacity(100%);
        }
        span{
            color:#ccc;
        }
    }

    
`;
const ToggleDropCart = styled.div`
    display: ${props => (props.isVisible ? 'block' : 'none')};
    margin-top: 13.5px;
    width: 300px;
    background-color: #8f6262b3;
    position: absolute;
    top:100%;
    left: -200%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
`;
const Counter = styled.span`
    color:#979797;
`;
const DeleteCartItem = styled.img`
    cursor: pointer;
    width: 20px;
    &:hover{
        filter: drop-shadow(0 0 5px crimson);
    }
`;
const ItemContainer = styled.div`
    margin: 10px 0;
`;

const Cart = () => {
    const dispatch = useDispatch();
    const reduxCart = (nameItem,units)=>{
        dispatch(deleteCart(nameItem,units))
    }


    const listGames = useSelector(state => state.cartActions.lista);

    const count = useSelector(state => state.cartActions.count);

    const [isToggleVisible, setIsToggleVisible] = useState(false);
    const toggleCartDisplay = () => {
        setIsToggleVisible(!isToggleVisible);
    };


    return (
    <CartContainer>
        {/* es una prueba de funcionamiento*/}
        <CartHeader onClick={() => {  toggleCartDisplay(); }}>  
            <img src={images.cart} alt="" />
            <Counter>{count}</Counter>
        </CartHeader>
        <ToggleDropCart isVisible={isToggleVisible} >
            
            {listGames.map(item => (
                <ItemContainer key={item.nombre}>
                    {item.nombre} {item.units + " "}
                    <DeleteCartItem src={images.trash} alt="trash"  onClick={() => reduxCart(item.nombre, item.units)}>
                    </DeleteCartItem>
                </ItemContainer>
            ))}
        </ToggleDropCart>
    </CartContainer>

)
}

export default Cart