import React from 'react'
import styled from 'styled-components'
import BigCard from '../cards/BigCard';
import NormalCard from '../cards/NormalCard';
import dataStore from "../../data/dataStore.json"

const PopularGameContainer = styled.div`
    width: 100%;
    height:fit-content;
    margin-top: -20px;
`;
const HeaderPopular = styled.div`
    height: 50px;
    
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
        margin-left: 20px;
        
    }
`;
const ContainerPopularGames = styled.div`
    width: 100%;
    height: fit-content;
    margin-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

function PopularGames() {

    const renderBigCards = () => {
        const firstFourGames = dataStore.slice(0, 4);
        return firstFourGames.map((game) => (
            <BigCard key={game.id} game={game} />
        ));
    };

    return (
        <PopularGameContainer>
            <HeaderPopular>
                <h2>Top Games 
                    <span>go to store
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </span>
                    
                </h2>
            </HeaderPopular>
            <ContainerPopularGames>
                {renderBigCards()}
            </ContainerPopularGames>
            
        </PopularGameContainer>
    )
}

export default PopularGames