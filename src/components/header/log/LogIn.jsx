import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const LogInContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        svg{
        color:black;
        width: 25px;
        }      
        span{
            display: none;
        }
    }
    
`;

function LogIn() {
    return (
        <LogInContainer>
            <Link to={"/login"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <span>Login</span>
            </Link>
            
        </LogInContainer>
    )
}

export default LogIn