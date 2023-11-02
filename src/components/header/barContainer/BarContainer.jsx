import React from 'react'
import styled from 'styled-components'
import data from "./data/data.json"
import images from "../../../assets/images/navbar/navImgs"
import "./BarContainer.css"
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

    &:hover > ul{
        display: flex;
        flex-direction: column;
        
    }


    &:hover > img{
        display: block;
    }
    img{
        display: none;
        position: absolute;
        height: 90px;
        margin-left: 40px;
    }
`;
const TitleItem = styled.a`
    display: block;
    position: relative;
    text-decoration: none;
    padding: 10px 15px;
    color:#ccc;
    text-transform: uppercase;
    width: 100%;
    font-size: 15px;

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
    z-index: 1;
    width: 200px;
    list-style: none;
`;
const ContentItem = styled.a`
    text-decoration: none;
    color:black;
`;
const BoxSearch = styled.div`
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
                    <TitleItem href='#'>Inicio</TitleItem>
                </ListItem>
                {data.map((item)=>(
                    <ListItem className={item.title === "log in" ? "log-in-nav" : item.title+"-nav"}>
                        <TitleItem href="#">{item.title} <span>▼</span></TitleItem>
                        <img src={images.triangle} className='triangle' alt="" />
                        <ToggleDropContent>
                            {item.content.map((content) => (
                                <li>
                                    <ContentItem href="#">
                                        {content}
                                    </ContentItem>
                                </li>
                                
                            ))}
                            
                        </ToggleDropContent>
                    </ListItem>



                ))}
                
            </BarList>
            <BoxSearch>
                {/* agregar funcion buscadora */}
            </BoxSearch>
        </BarContainer>
    )
}

export default BarContainerMain