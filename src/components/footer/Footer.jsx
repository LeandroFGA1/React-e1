import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
margin-top: 200px;
    background-color: #333;
    color: #fff;
    padding: 20px;
    text-align: center;
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 10px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <div>
                    <h3>Contacto</h3>
                    <p>Email: contact@cheapgames.com</p>
                    <p>Teléfono: +123 456 7890</p>
                </div>
                <div>
                    <h3>Síguenos</h3>
                    <SocialIcons>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/path-to-your-icon/youtube-icon.png" alt="YouTube" />
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src="/path-to-your-icon/facebook-icon.png" alt="Facebook" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/path-to-your-icon/twitter-icon.png" alt="Twitter" />
                        </a>
            {/* Agrega más según sea necesario */}
                    </SocialIcons>
                </div>
            </FooterContent>
            <p>&copy; 2023 Tu Nombre | Todos los derechos reservados</p>
        </FooterContainer>
    );
};

export default Footer;
