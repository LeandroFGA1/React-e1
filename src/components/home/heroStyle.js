import styled from "styled-components";
import directory from "../../assets/images/games/directoryGamesImages";
import "../../assets/styles/palette.css"

export const HeroContainer = styled.section`
    width: 100%;
    height: 70vh;
    background-color: red;

    @media only screen and (min-width: 481px) {
    /* Estilos específicos para iPads, Tablets (481px - 768px) */

}

@media only screen and (min-width: 769px) {
    /* Estilos específicos para Small screens, laptops (769px - 1024px) */
}

@media only screen and (min-width: 1025px) {
    /* Estilos específicos para Desktops, large screens (1025px - 1200px) */
}


`;
export const BannerPromo = styled.div`
    background-color: var(--gray-dark);
    color: white;
    width: 100%;
    height: 40px;
    white-space: wrap;
    overflow: hidden;
    text-align: center;
    text-transform: capitalize;

    b {
        color: var(--gold);
    }

`;


export const HeroGame = styled.div`
    background-image: url(${directory.heroShortImage});
    background-size: 500px;
    background-position: center;
    width: 100%;
    height: calc(-40px + 70vh );
    display: flex;
    align-items: end;
    justify-content: center;
    img{
        position: absolute;
        left: 5;
        top: 30%;
        width: 200px;
        aspect-ratio: 16/9;
    }
    div{
        margin-bottom: 10px;
    }
    @media only screen and (min-width: 481px) {
    /* Estilos específicos para iPads, Tablets (481px - 768px) */
        background-image: url(${directory.heroImage});
        background-size: 1000px;
        background-position: center;
        img{
            top: auto;
            right: 0;
        }
    }
    @media only screen and (min-width: 769px) {
    /* Estilos específicos para Small screens, laptops (769px - 1024px) */
        background-size: cover;
    }
`;
