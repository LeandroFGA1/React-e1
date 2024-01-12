import styled from "styled-components";


export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: red;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    text-transform: capitalize;
    letter-spacing: 0.25px;


    @media only screen and (min-width: 481px) {
        /* Estilos específicos para iPads, Tablets (481px - 768px) */
        .logo-container{
            order:1;
            width: 30%;
            justify-content: center;
        }
        .navbar-container{
            order: 2;
            width: 40%;
            label{
                display: none;
            }
            nav{
                display: flex;
                position: relative;
                top: 0;
                right: 0;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                background-color: transparent;
                
            }
        }
        .right-container{
            order: 3;
            width: 30%;
        }
    }

    @media only screen and (min-width: 769px) {
        /* Estilos específicos para Small screens, laptops (769px - 1024px) */
        .logo-container{
            width: 20%;
            justify-content: start;
            img{
                margin-left: 20px;
            }
        }
        .navbar-container{
            width: 30%;
        }
        .right-container{
            width: 40%;
            justify-content: end;
            gap: 30px;
            span{
                display: block;
                margin-right: 20px;
            }
        }
    }

    @media only screen and (min-width: 1025px) {
        /* Estilos específicos para Desktops, large screens (1025px - 1200px) */
        .logo-container{
            width: 10%;
        }
        .navbar-container{
            width: 40%;
            justify-content: start;
            nav{
                width: 60%;
                
            }
        }
        .right-container{}
    }

    @media only screen and (min-width: 300px) {
        /* Estilos específicos para Extra large screens, TV (1201px y más) */
        /* hacerlo proximamente cuando tengamos un tester */
        
    }
    .search-bar{
        animation: onBar 0.3s forwards ;
        position: absolute;
        background-color: red;
        display: none;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        svg{
            width: 30px;
        }
        label{
            display: flex;
            background-color: red;
            height: 100%;
            width: 100%;
            align-items: start;
            input{
                width:70%;
                height: 45%;
                display: block;
                &:focus{
                    
                    & ~ span{
                        top: 15%;
                        background-color: white;
                        color:black;
                        transform: scale(120%);
                }
                }
            }
            span{
                cursor: text;
                position: absolute;
                left: 10%;
                font-size: 12px;
                color: grey;
                z-index: 1;
                top:40%;
                transition: all 0.5s ease-in-out;
                
            }
        


        }
        @keyframes onBar {
            0% {
                transform:translateY(-100px);
            }
            100% {
                transform: translateY(0px);
            }
        }
        @keyframes outBar {
            0% {
                transform:translateY(0px);
            }
            100% {
                transform: translateY(-100px);
            }
        }
    }
`;


export const LogoContainer = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
    img{
        height: 40px;
        width: 40px
    }

`;

export const NavbarContainer = styled.div`
    position: relative;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    label{
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        
        div{
            transition: all 0.5s ease-in-out;
        }
    }
    input{
        display: none;
        &:checked ~ nav{
            display: flex;
            opacity: 0;
            animation: onMenu 0.3s ;
            animation-fill-mode: forwards;

        }
        &:checked ~ label{
            div{
                margin: 0;
            }
            .bar-top{
                transform: rotate(45deg) translate(3px,3px) ;
            }
            .bar-mid{
                transform: translateX(30px);
                opacity: 0;
            }
            .bar-bot{
                transform: rotate(-45deg) translateY(0px);
            }

            @keyframes onMenu {
                0%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
        }

    }
    nav{
        width: 100vw;
        position: absolute;
        top: 100%;
        left: 0;
        display: none;
        gap: 10px;
        align-items: center;
        flex-direction: column;
        padding: 10px 0px;
        background-color: purple;
    }

    
`;

export const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select:none;
    user-select:none;
`;

export const MenuBar = styled.div`
    height: 2px;
    width: 30px;
    background-color: black;
    margin: 4px 0px;
`;
