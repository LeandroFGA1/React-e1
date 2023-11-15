import React from 'react'
import data from "./data/data.json"
import styled from 'styled-components'
import "./StoreStyles"
import { GameCard, StoreContainer, GameCardInfo, GameName, GamePrice, BestGames, GamesContainer } from './StoreStyles'
import images from "../../assets/images/store/storeImgs"

function Store() {
    return (
        <StoreContainer>
            <h2>Populars Games</h2>
            <GamesContainer>
                {data.map((item)=>(
                    <GameCard className={item.id || "generic-card"} >
                        <img src={images[item.imageID] || images.cardDefault} alt="" />
                        <GameCardInfo>
                            <GameName className='game-name'>{item.name || 'Default Name'}</GameName>
                            <GamePrice className="game-price">{item.price || '$1'}</GamePrice>
                        </GameCardInfo>
                        
                    </GameCard>
                ))}
    </GamesContainer>
        </StoreContainer>
    
    )
}

export default Store