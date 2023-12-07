import {styled, keyframes } from "styled-components";
import images from "../../assets/images/hero/HeroImgs"

export const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-5px);
    }

    60% {
        transform: translateY(-2px);
    }
`;


export const HeroContainer = styled.div`
    /* margin-top: -33px; */
    width: 100%;
    height: 92vh;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;
export const VideoContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    background-color: blue;

    
    video{
        margin-top: -10px;
        width: 100%;
        height: auto;
        display: block;
    }
`;
export const AboutGameVideo = styled.div`
    flex-grow: 1;
    width: 100%;
    background-image: url(${images.texture});
    background-repeat: repeat;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-around;
    background-size: contain;

    span{
        font-size: 20px;
        text-transform: capitalize;
        animation: ${bounce} 2s infinite ;
    }

`;