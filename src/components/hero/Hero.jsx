import React from 'react'
import images from "../../assets/images/hero/HeroImgs"
import {AboutGameVideo, HeroContainer, VideoContainer} from "./HeroStyles"
import videoBG from "../../assets/videos/The-Elder-Scrolls-VI-Teaser-cut.mp4"
import AddCard from "../buttons/AddCard"



function Hero() {
    return (
    <HeroContainer>
        <VideoContainer>
            <video src={videoBG} autoPlay muted loop video/>
        </VideoContainer>
        <AboutGameVideo>
            <span>coming soon</span>
            <span>this website is not real game shop</span>
            
        </AboutGameVideo>
        
        
        
    </HeroContainer>
    )
}

export default Hero