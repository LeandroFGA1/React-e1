import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BarCategoriesContainer = styled.div`
    width: 100%;
    height: fit-content;
    background-color: azure;
    display: flex;
    align-items: center;
    top: 1;
    left: 1;
    z-index: 2;
    font-weight: 300;
    

    ul {
        display: flex;
        align-items: center;
        gap: 10px;
        text-transform: capitalize;
        width: 100%;
        height: 100%;
        flex-wrap: wrap;
        justify-content: center;

        li {
            height: 100%;
            border-right: grey solid 0.5px;
            border-left: grey solid 0.5px;
            padding: 0 5px;
            &:hover {
                    background-color: #ddd;
                }
            a {
                height: 100%;
                display: flex;
                align-items: center;
                text-decoration: none;
                color: black;

            }
        }
        
        
    }
`;

const OrderBtnsContainer = styled.div``;

function BarCategories() {

    const categories = [
        'action',
        'adventure',
        'arcade',
        'fantasy',
        'fps',
        'multiplayer',
        'online',
        'open-world',
        'retro',
        'rpg',
    ];

    return (
        <BarCategoriesContainer>
            <ul>
                {categories.map((category) => (
                    <li key={category} >
                        <Link to={`/store/${category}`}>
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
            <OrderBtnsContainer>
                {/* ... (resto de tus elementos) */}
            </OrderBtnsContainer>
        </BarCategoriesContainer>
    );
}

export default BarCategories;