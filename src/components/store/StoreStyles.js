import styled from "styled-components";

export const StoreContainer = styled.section`
    margin: 0 5%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-row-gap: 30px;
    justify-items: center;
    align-content: center;

`;
export const GameCard = styled.div`
    filter: drop-shadow(0 0 5px grey);
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 200px;
    background-color: aqua;
    img{
        
        width: 100%;
        height: 70%;
    }
    margin: 0;
    padding: 0;
`;

export const GameCardInfo = styled.a`
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