import React from 'react'
import images from "../../assets/images/hero/HeroImgs"
import { AddToCartButton, HeroContainer, HeroStart, HeroStartComponents, HeroStartContainer, ImageComponent, SpanComponent } from "./HeroStyles"


function Hero() {
    return (
    <HeroContainer>
        <HeroStartContainer>
            <HeroStart>
                <HeroStartComponents>
                    <SpanComponent>available now</SpanComponent>
                    <p>Step into the fallen utopia of Rapture and uncover the horrors and wonders of the masterpiece</p>
                    <ImageComponent src={images.bioshockLogo}/>
                    
                    <AddToCartButton>
                        <span>$10,30</span>
                        <span>Add to Cart</span>   
                    </AddToCartButton>
                </HeroStartComponents>
                
            </HeroStart>
        </HeroStartContainer>
    </HeroContainer>
    )
}

export default Hero