import React from 'react'
import data from "./data/data.json"
import styled from 'styled-components'
import "./StoreStyles"
import { GameCard, StoreContainer, GameCardInfo, GameName, GamePrice } from './StoreStyles'
import images from "../../assets/images/store/storeImgs"

function Store() {
    return (
    <StoreContainer>
        {data.map((item)=>(
            <GameCard id={item.id}>
                <img src={item.imageID || images.cardDefault} alt="" />
                <GameCardInfo>
                    <GameName id='game-name'>{item.name || 'Default Name'}</GameName>
                    <GamePrice id="game-price">{item.price || '$1'}</GamePrice>
                </GameCardInfo>
                
            </GameCard>
        ))}
    </StoreContainer>
    )
}

export default Store