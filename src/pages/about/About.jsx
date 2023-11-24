import React from 'react';
import styled from 'styled-components';
import images from "../../assets/images/navbar/navImgs"

const AboutContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
`;

const SectionTitle = styled.h2`
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
`;

const Paragraph = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #666;
    margin-bottom: 20px;
`;

const Highlight = styled.span`
    color: #ff3366;
    font-weight: bold;
`;

const ImageContainer = styled.div`
    text-align: center;

    img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin-top: 20px;
    }
`;

const About = () => {
    return (
        <AboutContainer>
            <SectionTitle>About Cheap Games</SectionTitle>

            <Paragraph>
                Welcome to <Highlight>Cheap Games</Highlight>! We are your go-to destination for affordable and
                high-quality video games. Our mission is to make gaming accessible to everyone, providing the best prices on
                your favorite titles.
            </Paragraph>

            <Paragraph>
                At <Highlight>Cheap Games</Highlight>, we believe that enjoying great gaming experiences shouldn't
                break the bank. We curate a collection of games across various platforms, ensuring that you can find the latest
                releases and timeless classics at prices that won't empty your wallet.
            </Paragraph>

            <SectionTitle>Our Commitment</SectionTitle>

            <Paragraph>
                - <Highlight>Affordability:</Highlight> We strive to offer the most competitive prices on the market,
                allowing gamers to build their libraries without spending a fortune.
            </Paragraph>
            <Paragraph>
                - <Highlight>Quality:</Highlight> Every game in our selection is carefully chosen for its entertainment
                value and quality, ensuring you have a great gaming experience.
            </Paragraph>
            <Paragraph>
                - <Highlight>Community:</Highlight> Join our community of fellow gamers to share recommendations,
                discuss gaming strategies, and stay informed about the latest deals and releases.
            </Paragraph>

            <ImageContainer>
                <img
                src={images.logoPage}
                alt="About Cheap Games"
                />
            </ImageContainer>

            <Paragraph>
                Thank you for being a part of the <Highlight>Cheap Games</Highlight> community. Let's explore new
                worlds and epic adventures together without breaking the bank!
            </Paragraph>
    </AboutContainer>
    );
};

export default About;
