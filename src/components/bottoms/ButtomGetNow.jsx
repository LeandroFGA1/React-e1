import React from 'react'
import styled from 'styled-components'

const GetNowContainer = styled.div`
    text-transform: capitalize;
    outline: 0;
    grid-gap: 8px;
    align-items: center;
    background-color: var(--blue-light);
    color: #000;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
    display: inline-flex;
    flex-shrink: 0;
    font-size: 16px;
    gap: 8px;
    justify-content: center;
    line-height: 1.5;
    overflow: hidden;
    padding: 12px 16px;
    text-decoration: none;
    text-overflow: ellipsis;
    transition: all .14s ease-out;
    white-space: nowrap;
    &:hover {
        box-shadow: 4px 4px 0 #000;
        background-color: var(--gold);
        transform: translate(-4px,-4px);
    }
    &:focus-visible{
        outline-offset: 1px;
    }
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
`;
const ButtomGetNow = () => {
    return (
        <GetNowContainer>
            play now
        </GetNowContainer>
    )
}

export default ButtomGetNow