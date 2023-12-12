import React from 'react'
import data from "../../data/store/dataStore.json"
import "./StoreStyles"
import { GameCard, StoreContainer, GameCardInfo, GameName, GamePrice, BestGames, GamesContainer } from './StoreStyles'
import images from "../../assets/images/store/storeImgs"
import { useState } from 'react'

function Store({ showGames }) {
    const [inputName, setInputName] = useState("");

    const handleChange = (event) => {
        const newSearch = event.target.value;
        setInputName(newSearch);
    }

    // Filtra los juegos según el nombre ingresado en el input
    const filteredGames = showGames
        ? data.filter(item => item.name.toLowerCase().includes(inputName.toLowerCase()))
        : data.slice(0, 4);

    return (
        <StoreContainer>
            <h2>Populars Games</h2>
            <input
                type="text"
                name="game-name-search"
                id="game-name-search"
                onChange={handleChange}
                value={inputName} // Añade el valor del input
            />
            <label htmlFor="game-name-search"></label>
            <h3>{inputName}</h3>
            <GamesContainer>
                {filteredGames.map((item) => (
                    <GameCard className={item.id || "generic-card"} key={item.id}>
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