import React from 'react'
import SupportForm from '../../components/form/SuportForm'
import styled from 'styled-components'

const IntroductionContainer = styled.div`
    width: 100%;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p{
        width: 90%;
    }
`;

const Suport = () => {
    return (
        <>
            <IntroductionContainer>
                <p>
                    Welcome to Game Shop, where we deeply value the direct engagement with our dedicated community of gamers. Your insights, whether they involve bug reports, questions, or valuable suggestions, play a crucial role in enhancing the overall gaming experience.
                </p>
                <p>
                    Our commitment is to be readily available to address your needs. We encourage you to utilize the form below to connect with our support team. Whether you've encountered a technical glitch, have inquiries about payments, or want to share your creative suggestions, your input is invaluable to us.
                </p>
                <p>
                    At Game Shop, fostering a vibrant and interactive gaming community is at the heart of what we do. Your feedback is instrumental in shaping the future of our platform. Thank you for being a part of our gaming family, and we look forward to hearing from you!
                </p>
            </IntroductionContainer>
            
            <SupportForm/>
        </>
        
    )
}

export default Suport