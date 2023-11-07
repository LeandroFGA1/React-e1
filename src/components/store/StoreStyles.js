import styled from "styled-components";

export const GamesContainer = styled.div`
    margin: 0 5%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-row-gap: 60px;
    justify-items: center;
    align-content: center;

`;
export const GameCard = styled.div`
    position: relative;
    filter: drop-shadow(0 0 5px grey);
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 150px;
    background-color: aqua;
    img{
        
        width: 100%;
        height: 100%;
    }
    margin: 0;
    padding: 0;
`;

export const GameCardInfo = styled.a`
    position: absolute;
    top: 100%;
    cursor: pointer;
    background-color: grey;
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: aqua;
        #game-name{
            display: none;
        }
        #game-price{
            display: block;
        }
        
    }

`;
export const GameName = styled.span`


`;
export const GamePrice = styled.span`
    display: none;
`;

export const BestGames = styled.div`

`;
export const StoreContainer = styled.section`


`;