import React, { useState } from 'react'
import styled from 'styled-components'
import images from "../../../../assets/images/navbar/navImgs"

const CartContainer = styled.div`
    position: relative;
    width: 40px;

`;
const CartHeader = styled.a`
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
    width: 100px;
    background-color: red;
    position: absolute;
    top:100%;
`;
const Counter = styled.span`
    color:#979797;
`;

const Cart = () => {
    const [count,setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1);
    }

    const [isToggleVisible, setIsToggleVisible] = useState(false);
    const toggleCartDisplay = () => {
        setIsToggleVisible(!isToggleVisible);
    };


    return (
    <CartContainer>
        {/* es una prueba de funcionamiento*/}
        <CartHeader href='#' onClick={() => { handleIncrement(); toggleCartDisplay(); }}>  
            <img src={images.cart} alt="" />
            <Counter>{count}</Counter>
        </CartHeader>
        <ToggleDropCart isVisible={isToggleVisible} > 
            <p>Estoy vacio pa</p>
            <p>hola</p>
            <p>adios</p>
        </ToggleDropCart>
    </CartContainer>

)
}

export default Cart