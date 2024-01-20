import React from 'react'
import styled from 'styled-components'
import { categoryPagePacker } from '../utilities/dataActions';
import BigCard from '../components/cards/BigCard';
import NormalCard from '../components/cards/NormalCard';
import BarCategories from '../components/gameStore/BarCategories';

const HeaderPage = styled.div`
    width: 100%;
    height: 100px;
`;
const TopGames = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 100px;
`;
const RegularGames = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 50px;
`;
function MainLayout({name}) {
    const games = categoryPagePacker(name);
    const bestGames = games.slice(0,3);
    const generalGames = games.slice(3);
    return (
        <>
            <BarCategories/>
            <HeaderPage>
                {name}
            </HeaderPage>
            <TopGames>
                {bestGames.map((game)=>(
                    <BigCard game={game}/>
                ))}
            </TopGames>
            <RegularGames>
                {generalGames.map((game)=>(
                    <NormalCard game={game}/>
                ))}
            </RegularGames>
        </>
    )
}

export default MainLayout