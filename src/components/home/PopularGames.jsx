import React from 'react'
import styled from 'styled-components'
import BigCard from '../cards/BigCard';

const PopularGameContainer = styled.div`
    width: 100%;
    height: 70vh;
    background-color: antiquewhite;
    margin-top: -20px;

    span{
        margin-left: 10px;
        font-size: 16px;
        display: flex;
        align-items: center;
        svg{
            width: 15px;
            height: 15px;
        }
    }
    
    h2{
        display: flex;
        
    }
`;

function PopularGames() {
    return (
        <PopularGameContainer>
            <div>
                <h2>Top Games 
                    <span>go to store
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                    
                </h2>
            </div>
            <BigCard></BigCard>
        </PopularGameContainer>
    )
}

export default PopularGames