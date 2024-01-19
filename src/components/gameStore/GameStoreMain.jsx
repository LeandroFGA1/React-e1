import React from 'react'
import styled from 'styled-components'
import { removeDuplicatesByName, groupByCategory, hasEnoughGames } from '../../utilities/dataActions';
import dataStore from "../../data/dataStore.json"
import NormalCard from '../cards/NormalCard';

const GamesStoreMainContainer =styled.section`
    width: 100%;
    height: fit-content;
    padding-bottom: 100px;
    background-color: #c9c9c9;
    
`;
const GameCategoryContainer = styled.div`
    width: 96%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    h2{
        padding-left: 20px;
        text-transform: capitalize;
    }
`;

const GameCategoryItems = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
`;


function GameStoreMain() {
    const dataFilter = removeDuplicatesByName(dataStore);
    console.log(dataFilter)
    const dataOrder  = groupByCategory(dataFilter);
    
    return (
        <GamesStoreMainContainer id="game-store">
            {Object.entries(dataOrder).map(([category, games]) => (
                hasEnoughGames({ games }) && (
                    <GameCategoryContainer key={category}>
                        <h2>{category}</h2>
                        <GameCategoryItems>
                            {games.map((game) => (
                                <NormalCard key={game.ID} game={game} />
                            ))}
                        </GameCategoryItems>
                    </GameCategoryContainer>
                )
            ))}
        </GamesStoreMainContainer>
    )
}

export default GameStoreMain