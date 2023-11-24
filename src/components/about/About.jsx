import React from 'react'
import {AboutContainer, Title, Subtitle, Description, Image} from "./AboutStyles"

function About() {
    return (
        <AboutContainer>
            <Title>About Our Online Store</Title>
            <Subtitle>Our Mission</Subtitle>
            <Description>
                At Cheap Game, we are on a mission to [describe your mission]. We believe in [your beliefs and values],
                and our goal is to [describe your goals and objectives].
            </Description>
            <Subtitle>
                Who We Are
            </Subtitle>
            <Description>
                Cheap Game is a team of passionate individuals dedicated to providing an exceptional online shopping
                experience. We carefully curate our collection to bring you high-quality products that align with our values.
                Our team is committed to [any specific commitments or principles you want to highlight].
            </Description>
        </AboutContainer>
    )
}

export default About