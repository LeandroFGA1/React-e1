import React from 'react'
import { BannerPromo, HeroContainer, HeroGame } from './heroStyle'
import ButtomGetNow from '../bottoms/ButtomGetNow'
import directoryImages from '../../assets/images/directoryImages'
import PopularGames from './PopularGames'
import BigCard from '../cards/BigCard'
import Categories from './Categories'


const Hero = () => {
    return (
        <>
            <HeroContainer id='hero'>
                <BannerPromo>
                    <span>download Genshin Impact here and <b>get 15% off   </b>your first purchase!</span>
                </BannerPromo>
                <HeroGame>
                    <img src={directoryImages.genshinLogo} alt="genshin logo" />
                    <ButtomGetNow></ButtomGetNow>
                </HeroGame>
            </HeroContainer>
            <PopularGames>
                <BigCard></BigCard>
            </PopularGames>
            <Categories>
                
            </Categories>
        </>
    )
}

export default Hero