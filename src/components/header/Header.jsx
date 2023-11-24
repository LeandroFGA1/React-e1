
import styled from "styled-components"
import images from "../../assets/images/navbar/navImgs"
import BarContainer from "./barContainer/BarContainer"
import "./Header.css"
import SearchCartContainer from './searchCartContainer/SearchCartContainer'

const NavContainer = styled.nav`
    
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: rgba(26, 26, 26, 0.8);
    display: flex;
    justify-content: space-around;
    z-index: 1;


`;
const LogoContainer = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:#ccc;
    text-align: center;

    span{
        margin-left: 5px;
    }
    
    img{
        margin-left: 10px;
        width: 50px;
        height: 50px;
    }

    @media (max-width: 767px) {
        span{
            display: none;
        }
    }
`
;

function Header() {
    return (
        <NavContainer>
            <LogoContainer>
                <img className='logo-img' src={images.logoPage} alt="" />
                <span className='sloga-logo'>Cheap game <br/> Best game</span>
            </LogoContainer>
            <BarContainer></BarContainer>
            <SearchCartContainer></SearchCartContainer>
        </NavContainer>
    )
}

export default Header