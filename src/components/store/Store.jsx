import React from 'react'
import data from "../../data/store/dataStore.json"
import "./StoreStyles"
import { GameCard, StoreContainer, GameCardInfo, GameName, GamePrice, BestGames, GamesContainer } from './StoreStyles'
import images from "../../assets/images/store/storeImgs"

function Store( {showGames}) {
    const filteredGames = showGames ? data : data.slice(0, 4);
    return (
        <StoreContainer>
            <h2>Populars Games</h2>
            <GamesContainer>
                {filteredGames.map((item)=>(
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