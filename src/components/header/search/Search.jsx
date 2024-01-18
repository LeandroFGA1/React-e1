import React from 'react'
import styled from "styled-components";
import {useDispatch} from "react-redux"
import { changeScreen } from '../../../store/slice';

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    cursor: pointer;
    svg{
        width: 25px;
        color:black;
    }
`;
function Search() {
    const dispatch = useDispatch();
    const isEnableInput = ()=>{
        dispatch(changeScreen())
    }
    return (
        <SearchContainer onClick={isEnableInput} className='search-icon'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
                // style={{ color: 'red' }}
                >
                
                <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                stroke="currentColor" />
            </svg>
        </SearchContainer>
    )
}

export default Search