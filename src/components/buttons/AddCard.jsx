import React from "react";
import styled from "styled-components";
import images from "../../assets/images/navbar/navImgs"
import "../../assets/styles/colors.css"

const BoxBotton = styled.a`
    display: flex;
    align-items: center;
    background-color: var(--primary-color-botton);
    width: fit-content;
    padding: 5px 20px;
    height: fit-content;
    border-radius: 5px;
    filter: drop-shadow(0 0 5px black);
    margin-left: 400px;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    font-size: 20px;
    img{
        margin-top: 5px;
        width: 30px;
        margin-right: 5px;
        filter:drop-shadow(0 0 1px black);

    }
    span{
        color: black;
    }
    &:hover{
        background-color: var(--secondary-color-botton);
        img{
            filter:drop-shadow(0 0 5px black);
        }
        span{
            filter:drop-shadow(0 0 10px green);
        }
    }
`;
const CardAddBotton = () => {
    return (
        <BoxBotton href="#">
            <img src={images.cartPlus} alt="" />
            <span>Add to card</span>
        </BoxBotton>
    )
}

export default CardAddBotton
