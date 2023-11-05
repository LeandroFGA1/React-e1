import React, { useState } from 'react'
import styled from 'styled-components'
import images from "../../../../assets/images/navbar/navImgs"
const SearchContainer = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        position: relative;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 25px;
            height: 25px;
            
            filter:opacity(60%);
            &:hover{
                filter: opacity(100%);
            }
        }
    }
`;

const InputContainer = styled.div`
    position: absolute;
    width: 80%; /* Ocupa el 80% del ancho de la pantalla */
    height: 60px;
    background-color: RGB(67.64, 62.04, 55.44);
    display: ${props => (props.isVisible ? 'flex' : 'none')};
    align-items: center;
    gap:10px;

    img{
        cursor: pointer;
        height: 25px;
        width: 25px;
        margin-left: 15%;
    }
    input::placeholder {
    color: #999;
    padding-left:20px; /* Cambia el color del placeholder a gris, puedes usar cualquier color que desees */
    }
    input{

        border: none;
        border-bottom: 4px solid gray;
        height: 30px;
        width: 200px; 
        background: #808080a2;
        padding: 0;
        outline: none;
        border-radius: 10px;
}
`;

const Search = () => {
    const [isVisibleSearch,setIsVisibleSearch ] = useState(false);
    const InputDisplay = ()=>{
        setIsVisibleSearch(!isVisibleSearch);
    }
    return (
        

        <SearchContainer>
            <a href="#" onClick={InputDisplay}>
                <img src={images.loupe} alt="" />
            </a>
            <InputContainer isVisible={isVisibleSearch}>
                <img src={images.loupe} isVisible={isVisibleSearch} onClick={InputDisplay}/>
                <input type="text" placeholder='escribe aqui' />
            </InputContainer>
        </SearchContainer>
    )
}

export default Search