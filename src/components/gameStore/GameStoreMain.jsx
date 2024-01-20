import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { removeDuplicatesByName } from '../../utilities/dataActions';
import dataStore from "../../data/dataStore.json";
import NormalCard from '../cards/NormalCard';
import { Link } from 'react-router-dom';
import BarCategories from './BarCategories';

const GamesStoreMainContainer = styled.section`
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
    h2 {
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

    const [visibleGames, setVisibleGames] = useState(20);

    const handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 200) {
            // User has reached the bottom of the page
            setVisibleGames((prevVisibleGames) => prevVisibleGames + 20);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Add/remove event listener on mount/unmount

    const slicedData = dataFilter.slice(0, visibleGames);

    return (
    <>
        <BarCategories/>
        <GamesStoreMainContainer id="game-store">
            <GameCategoryContainer>
                <GameCategoryItems>
                    {slicedData.map((game) => (
                        <NormalCard key={game.ID} game={game} />
                    ))}
                </GameCategoryItems>
            </GameCategoryContainer>
        </GamesStoreMainContainer>
    </>
        
    );
}

export default GameStoreMain;
