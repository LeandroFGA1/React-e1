import React, { useState } from 'react';
import styled from 'styled-components';
import { categoryPagePacker } from '../utilities/dataActions';
import BigCard from '../components/cards/BigCard';
import NormalCard from '../components/cards/NormalCard';
import BarCategories from '../components/gameStore/BarCategories';

const HeaderPage = styled.div`
    width: 100%;
    height: 50px;
    div{
        display: none;
    }
    text-align: center;
    font-size: 30px;
    margin-top: 10px;
`;
const TopGames = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
const RegularGames = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;


function MainLayout({ name }) {
    const games = categoryPagePacker(name);
    const [currentOrder, setCurrentOrder] = useState('default');

    const bestGames = games.slice(0, 3);
    const generalGames = games.slice(3);

    const sortByPriceAsc = (gameA, gameB) => {
        return gameA.price - gameB.price;
    };

    const sortByPriceDesc = (gameA, gameB) => {
        return gameB.price - gameA.price;
    };

    const handleSortClick = (order) => {
        setCurrentOrder(order);
    };


    const sortFunction =
        currentOrder === 'asc' ? sortByPriceAsc : currentOrder === 'desc' ? sortByPriceDesc : undefined;

    const sortedGames = sortFunction ? generalGames.slice().sort(sortFunction) : generalGames;

    return (
        <>
            <BarCategories />
            <HeaderPage>
                <div>
                    <button onClick={() => handleSortClick('asc')}>Ordenar por menor precio</button>
                    <button onClick={() => handleSortClick('desc')}>Ordenar por mayor precio (Descendente)</button>
                </div>
                Top Games
            </HeaderPage>
            <TopGames>
                {bestGames.map((game) => (
                    <BigCard key={game.ID} game={game} />
                ))}
            </TopGames>
            <RegularGames>
                {sortedGames.map((game) => (
                    <NormalCard key={game.ID} game={game} />
                ))}
            </RegularGames>
        </>
    );
}

export default MainLayout;

