import React from 'react'
import styled from 'styled-components'
import data from "../../../data/header/dataHeader.json"
import images from "../../../assets/images/navbar/navImgs"
import "./BarContainer.css"
import { Link } from 'react-router-dom';
const BarContainer = styled.div`
    position: relative;
    input{
        display: none;
    }
    label{
        cursor: pointer;
        display: none;
        flex-direction: column;
        gap: 10px;
    }
    display: flex;
    align-items: center;
    @media (max-width:550px){
        label{
            display: flex;
        }
        >ul{
            display: none;
            position: absolute;
            top:100%;
            margin-left: -20vw;
            flex-direction: column;
            background-color: #ff9100;
            width: 300px;
            height: fit-content;
        }
    }
`;
const BarList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    width: 100%;
    height: 100%;

    @media (min-width: 550px) and (max-width: 650px) {
        .inicio-nav{
            display: none;
        }
  /* Estilos para pantallas de ancho menor o igual a 767px */
}
`;
const ListItem = styled.li`
    position: relative;
    align-self: center;
    margin-right:10px;

    &:hover > a > span{
        color:red;
    }

    &:hover > ul{
        display: flex;
        flex-direction: column;
        
    }


    
`;
const ItemLinked = styled(Link)`
    text-decoration: none;
    height: 100%;
    width: 100%;
    &:hover > img{
        display: block;
    }
    img{
        display: none;
        position: absolute;
        height: 90px;
        margin-left: 40px;
        margin-top: -40px;
        cursor: pointer;
    }
`;

const TitleItem = styled.span`
    display: block;
    position: relative;
    padding: 10px 15px;
    color:#ccc;
    text-transform: uppercase;
    width: 100%;
    font-size: 15px;
    transition: color 0.3s ease-in-out;

    span{
        font-size: 10px;
    }

    
`;
const ToggleDropContent = styled.ul`
    margin-top: 11px;
    display: none;
    position: absolute;
    left: 0;
    top: 100%; /* Aparece debajo del TitleItem */
    background-color: white;
    padding: 10px;
    width: 200px;
    list-style: none;
`;
const ContentItem = styled.a`
    text-decoration: none;
    color:black;
`;
function BarContainerMain() {
    return (
        <BarContainer>
            <input type="checkbox" name="burger-menu" id="toggle-menu" />
            <label htmlFor="toggle-menu" className='menu-bars'>
                <div className='menu-bar bar-top'></div>
                <div className='menu-bar bar-mid'></div>
                <div className='menu-bar bar-bottom'></div>
            </label>
            <BarList className='bar-list'>
                <ListItem className='inicio-nav'>
                    <ItemLinked to="/">
                        <TitleItem to="/">Inicio</TitleItem>
                    </ItemLinked>
                </ListItem>
                {data.map((item)=>(
                    <ListItem className={item.title === "log in" ? "log-in-nav" : item.title+"-nav"}>
                        <ItemLinked to={`/${item.title.toLowerCase()}`}>
                            <TitleItem >{item.title} {/*<span>▼</span>*/}</TitleItem>
                            {/* <img src={images.triangle} className='triangle' alt="" /> */}
                        </ItemLinked>
                        {/* <ToggleDropContent>
                            {item.content.map((content) => (
                                <li>
                                    <ContentItem href="#">
                                        {content}
                                    </ContentItem>
                                </li>
                                
                            ))}
                            
                        </ToggleDropContent> */}
                    </ListItem>



                ))}
                
            </BarList> 
        </BarContainer>
    )
}

export default BarContainerMain