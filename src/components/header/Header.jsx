import React from 'react'
import { HeaderContainer, MenuBar, RightContainer, NavbarContainer,LogoContainer } from './headerStyle'
import { NavLink } from 'react-router-dom'
import Search from './search/Search'
import Cart from './cart/Cart'
import LogIn from './log/LogIn'
import images from "../../assets/images/directoryImages"
import { useSelector } from "react-redux";

function Header() {
    const isDisplayedSelector = useSelector(state => state.rollOutSearch.isDisplayed);

    return (
        <HeaderContainer isDisplayedSelector={isDisplayedSelector}>
            
            <NavbarContainer className='navbar-container'>
                <input type="checkbox" name="toggle-menu" id="toggle-menu" />
                <label htmlFor="toggle-menu">
                    <MenuBar className='bar-top'/>
                    <MenuBar className='bar-mid'/>
                    <MenuBar className='bar-bot'/>
                </label>
                <nav className='prueba'>
                    <NavLink>
                        store
                    </NavLink>
                    <NavLink>
                        about
                    </NavLink>
                    <NavLink>
                        suport
                    </NavLink>
                    
                </nav>
                <div className='search-bar'>
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
                    <label htmlFor="search-bar">
                        <input type="text" name="search-bar" id="search-bar" placeholder='' />
                        <span>Search Here</span>
                    </label>

                </div>
            </NavbarContainer>
            <LogoContainer className='logo-container'>
                <a href="#">
                    <img src={images.logo} alt="" />
                </a>
            </LogoContainer>
            <RightContainer className='right-container'>
                <Search/>
                <Cart/>
                <LogIn/>
            </RightContainer>
        </HeaderContainer>
    )
}

export default Header