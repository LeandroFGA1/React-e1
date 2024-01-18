import React from 'react'
import styled from 'styled-components'
import directoryImages from '../../assets/images/directoryImages';
import directoryGamesImages from '../../assets/images/games/directoryGamesImages';
const BigCardContainer = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    align-items: end;
    justify-content: center;
    &:hover > .card-big{
        margin-bottom: 5px;
        .shadow-hover{
        opacity: 1;
        }
    }
`; 
const CardBig = styled.div`
    width: 290px;
    height: 390px;
    transition: all 0.3s ease-in-out;
`;
const InfoCardBig = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    background-color: var(--white);

    h3, .category-game{
        width: 90%;
        height: 30px;
        text-align: left;
        text-transform: capitalize;
    }
    .price-game{
        width: 100%;
        height: 60px;
        display: flex;
        align-items: end;
        justify-content: end;
        margin-bottom: 10px;
        margin-right: 10px;
        font-size: 30px;
    }
`;
const ImageCardBig = styled.div`
    width: 100%;
    height: 270px;
    position: relative;
    background-image: url(${directoryImages.noImage});
    background-repeat: no-repeat;
    background-size: 290px 390px;
`;
const ShadowHover = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0000007d;
    opacity: 0;
    transition: all 0.5s ease-in-out;
`;
const AddtoCart = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
    svg{
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: greenyellow;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        margin-right: 10px;
        padding: 2px;
        &:hover{
            background-color: black;
            path{
                stroke: greenyellow;
            }
        }
    }
`;
const Platforms = styled.div`
    width: 100%;
    height: 220px;
    display: flex;
    align-items: end;
    justify-content: center;
    gap: 5px;
    svg{
        height: 40px;
        width: 40px;
        margin-bottom: 20px;
        fill: whitesmoke;
        display: none;
    }

    &.windows >:nth-child(1){
        display: block;
    }
    &.android >:nth-child(2){
        display: block;
    }
    &.apple >:nth-child(3){
        display: block;
    }
`;

const SYSTEMS = ["windows","apple","android"]
function BigCard({game}) {
    const backgroundImage = game.imageID && directoryGamesImages[game.imageID]
        ? `url(${directoryGamesImages[game.imageID]})`
        : `url(${directoryImages.noImage})`;

    
    const categoryText = game.category.slice(0, 2).join(', ');

    const getSystemClassName = (systems) => {
        const validSystems = systems.filter(system => SYSTEMS.includes(system));
        return validSystems.join(' ');
    };

    const systemClassName = getSystemClassName(game.system);

    return (
        <BigCardContainer>
            <CardBig className='card-big'>
                <ImageCardBig style={{ backgroundImage }}>
                    <ShadowHover className='shadow-hover'>
                        <AddtoCart>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </AddtoCart>
                        <Platforms className={systemClassName}>
                                <svg  fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 497.886 497.886" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <polygon points="227.959,39.869 227.959,242.386 496.549,242.386 496.549,0 "></polygon> <polygon points="1.336,244.746 211.172,244.746 211.172,41.818 1.336,72.798 "></polygon> <polygon points="227.959,458.017 496.549,497.886 496.549,261.535 227.959,261.535 "></polygon> <polygon points="1.336,425.086 211.172,456.066 211.172,261.531 1.336,261.531 "></polygon> </g> </g> </g> </g>
                                </svg>
                                <svg  fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-146 129 218 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M-2.9,150.4l2.8-4.2l2.8-4.1l6.2-9.3c0.8-1.1,0.5-2.7-0.7-3.4c-1.1-0.8-2.7-0.5-3.4,0.7l-6.6,9.9l-2.8,4.2l-2.8,4.2 c-9-3.5-18.9-5.4-29.5-5.4c-10.5,0-20.5,1.9-29.5,5.4l-2.8-4.2L-72,140l-6.6-9.9c-0.8-1.1-2.3-1.4-3.4-0.7 c-1.1,0.8-1.4,2.3-0.7,3.4l6.2,9.3l2.8,4.1l2.8,4.2c-21,9.8-35.3,28.3-35.3,49.6H32.5C32.4,178.7,18.2,160.2-2.9,150.4z M-66.7,180.1c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4S-62.6,180.1-66.7,180.1z M-7.3,180.1 c-4.1,0-7.4-3.3-7.4-7.4c0-4.1,3.3-7.4,7.4-7.4c4.1,0,7.4,3.3,7.4,7.4C0.2,176.8-3.1,180.1-7.3,180.1z"></path> <path d="M-105.3,209.8l-1.1,0.1v12.3v10.1v86.6c0,8.7,7,15.7,15.7,15.7h11.3c-0.4,1.3-0.6,2.7-0.6,4.1v0.8v5v25.6 c0,8.2,6.7,14.9,14.9,14.9s14.9-6.7,14.9-14.9v-25.6v-5v-0.8c0-1.4-0.2-2.8-0.6-4.1h27.6c-0.4,1.3-0.6,2.7-0.6,4.1v0.8v5v25.6 c0,8.2,6.7,14.9,14.9,14.9c8.2,0,14.9-6.7,14.9-14.9v-25.6v-5v-0.8c0-1.4-0.2-2.8-0.6-4.1h11.3c8.7,0,15.7-7,15.7-15.7v-86.6v-10.1 v-12.4h-1.1H-105.3z"></path> <path d="M-131.1,209.9c-8.2,0-14.9,6.7-14.9,14.9v63.6c0,8.2,6.7,14.9,14.9,14.9c8.2,0,14.9-6.7,14.9-14.9v-63.6 C-116.3,216.5-122.9,209.9-131.1,209.9z"></path> <path d="M57.2,209.9c-8.2,0-14.9,6.7-14.9,14.9v63.6c0,8.2,6.7,14.9,14.9,14.9s14.9-6.7,14.9-14.9v-63.6 C72,216.5,65.4,209.9,57.2,209.9z"></path> </g> </g></svg>
                                <svg  fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-145 129 220 256" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M75,316.8c-6,13.3-8.9,19.3-16.6,31c-10.8,16.4-26,36.9-44.9,37.1c-16.8,0.2-21.1-10.9-43.8-10.8 c-22.7,0.1-27.5,11-44.3,10.8c-18.9-0.2-33.3-18.7-44.1-35.1c-30.2-46-33.4-99.9-14.7-128.6c13.2-20.4,34.1-32.3,53.8-32.3 c20,0,32.5,11,49.1,11c16,0,25.8-11,48.9-11c17.5,0,36,9.5,49.2,26C24.3,238.6,31.3,300.3,75,316.8L75,316.8z M0.8,170.6 c8.4-10.8,14.8-26,12.5-41.6c-13.7,0.9-29.8,9.7-39.1,21.1c-8.5,10.3-15.5,25.6-12.8,40.5C-23.7,191.1-8.2,182.1,0.8,170.6 L0.8,170.6z"></path> </g></svg>
                        </Platforms>
                    </ShadowHover>
                    

                </ImageCardBig>
                <InfoCardBig>
                    <h3 className='name-game'>{game.name}</h3>
                    <div className='category-game'>{categoryText}</div>
                    <div className='price-game'>$ {game.price}</div>
                </InfoCardBig>
            </CardBig>
        </BigCardContainer>
    )
}

export default BigCard