import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const BarCategoriesContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: azure;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1;
    left: 1;
    z-index: 2;
    ul{
        display: flex;
        align-items: center;
        gap: 10px;
        text-transform: capitalize;
        width: 60%;
        height: 100%;
        li{
            height: 100%;
            border-right: grey solid 0.5px;
            border-left: grey solid 0.5px;
            padding: 0 5px;
            

            a{
                height: 100%;
                display: flex;
                align-items: center;
            }
        }
    }
`;
const OrderBtnsContainer = styled.div``;

function BarCategories() {
    return (
    <BarCategoriesContainer>
        <ul>
            <li>
                <Link to={"/store/action"}>action</Link>
            </li>
            <li><Link to={"/store/adventure"}>adventure</Link></li>
            <li><Link to={"/store/arcade"}>arcade</Link></li>
            <li><Link to={"/store/fantasy"}>fantasy</Link></li>
            <li><Link to={"/store/fps"}>fps</Link></li>
            <li><Link to={"/store/multiplayer"}>multiplayer</Link></li>
            <li><Link to={"/store/online"}>online</Link></li>
            <li><Link to={"/store/open-world"}>Open World</Link></li>
            <li><Link to={"/store/retro"}>retro</Link></li>
            <li><Link to={"/store/rpg"}>RPG</Link></li>
        </ul>
        <OrderBtnsContainer>

        </OrderBtnsContainer>

    </BarCategoriesContainer>
    )
}

export default BarCategories