import styled from "styled-components";
import images from "../../assets/images/hero/HeroImgs"

export const HeroContainer = styled.div`
    margin-top: 60px;
`;
export const HeroStartContainer = styled.section`
    position: relative;
    margin: 0px 10%;
    width: 80%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const HeroStart = styled.div`
    width: 90%;
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
    flex-direction: column;
    text-align: center;
    gap: 30px;


    h3{
        width: fit-content;
        align-self:center;
        border-bottom: 2px solid purple;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
    p{
        margin-top: 30px;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
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
    margin-top: 10%;
    margin-left: 2%;
    width:100%;
    height: fit-content;
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
    left: calc(75%);
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
    margin-top: 30px;
    background-color: purple;
    width: fit-content;
    padding: 15px;
    border-radius: 5px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    align-self: center;
    text-shadow: 10px 0px 10px black;
    
`;