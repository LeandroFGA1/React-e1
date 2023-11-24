import styled from "styled-components";
import images from "../../assets/images/hero/HeroImgs"

export const HeroContainer = styled.div`
    margin-top: -33px;
`;
export const HeroStartContainer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HeroStart = styled.div`
    width: 100%;
    height: 90%;
    background-image: url(${images.bioshock});
    background-repeat: no-repeat;
    background-size: 100% 100%;

    @media (max-width:550px){
        background-image: url(${images.bioshockShort});
    }
    @media (min-width: 551px) and (max-width:750px){
        background-image: url(${images.bioshockMedium});
    }
`;

export const HeroStartComponents =styled.div`
    height: 100%;
    width: 40%;
    color:#ccc;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    gap: 30px;

    p{
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        width: 90%;
        margin-left: 10px;
    }

    @media (max-width:550px){
        width: 100%;
        align-items: center;
        flex-direction: column-reverse;
        justify-content: flex-end;
        
        p{
            display: none;
        }
    }   
    @media (min-width: 551px) and (max-width:750px){
        width: 100%;
        align-items: center;
        flex-direction: column-reverse;
        justify-content: flex-end;
        p{
            display: none;
        }
        img{
            display: none;
        }
    }
`;

export const ImageComponent = styled.img`
    margin-left: 2%;
    margin-bottom: 70px;
    width:100%;
    height: fit-content;
    filter: drop-shadow(0 0px 50px black);
    @media (max-width:550px){
        display: none;
    }
`;


export const AddToCartButton = styled.button`
    cursor: pointer;
    width: 200px;
    height: 40px;
    background-color: greenyellow;
    border: none;
    border-radius: 5px;
    position: absolute;
    left: calc(72%);
    top: 85%;
    font-weight: 700;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    @media (max-width:550px){
        left: calc(50% - 100px);
    }
    @media (min-width: 551px) and (max-width:750px){
        left: calc(70% - 100px);
    }
    @media (min-width:751px) and (max-width:1200px){
        left: calc(75% - 100px);
    }
`;

export const SpanComponent = styled.span`
    cursor: pointer;
    background-color: purple;
    width: fit-content;
    padding: 15px;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    align-self: center;
    text-shadow: 10px 0px 10px black;
    margin-bottom: 20px;
    
`;