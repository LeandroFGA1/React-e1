import React from 'react'
import styled from 'styled-components'
import images from "../../../../assets/images/navbar/navImgs"

const SearchContainer = styled.div`
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    a{
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 25px;
            height: 25px;
            filter: opacity(60%);
            &:hover{
                filter: opacity(100%);
            }
        }
    }

`;

const Search = () => {
    return (
        <SearchContainer>
            <a href="#">
                <img src={images.loupe} alt="" />
            </a>
        </SearchContainer>
    )
}

export default Search