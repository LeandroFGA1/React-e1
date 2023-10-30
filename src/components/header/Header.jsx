import React from 'react'
import styled from "styled-components"
import images from "../../assets/images/navbar/navImgs"
import "./Header.css"

const NavContainer = styled.div`
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: rgba(26,26,26,0.9);
    display: flex;
    justify-content: space-around;
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
`;
const BarContainer = styled.div`
    display: flex;
    width: 40%;
    margin-right: 100px;
`;
const BarList = styled.ul`
    list-style: none;
    display: flex;
    font-size: 18px;
    text-transform: uppercase;
    justify-content: space-between;
    width: 100%;
`;
const ItemNav =styled.li`
    position: relative;
    display: inline-block;
    width: 100px;

    &:hover > .prueba{
        display: block;
    }
    &:hover{
        
        :first-child {
            span{
                color:white;
            }
        }
    }
`;
const ItemRef = styled.a`
    text-decoration: none;
    font-weight: 600;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    color:#ccc;
`;
const OthersContainer = styled.div`
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    filter: contrast(1%);
`;
const CartContainer = styled.div``;
const SearchContainer = styled.div`
    img{
        width: 25px;
        height: 25px;
        filter: opacity(50%);
    
    &:hover{
        filter: opacity(100%);
        filter: drop-shadow(5px 2px 4px rgb(255, 255, 255));
    }

    }
`;
const CartItem = styled.div`
    display: flex;
    align-items: center;

    &:hover{
        border-bottom: 2px solid grey;
    }

    img{
        width: 30px;
        height: 30px;
        filter: opacity(50%);

    &:hover{
        filter: opacity(100%);
    }
    }
`;

function Header() {
    return (
        <NavContainer>
            <LogoContainer>
                <img src={images.logoPage} alt="" />
                <span>Cheap game <br/> Best game</span>
            </LogoContainer>
            <BarContainer>
                <BarList>
                    <ItemNav>
                        <ItemRef href="#">
                            <span>inicio</span>
                        </ItemRef>
                    </ItemNav>
                    <ItemNav>
                        <ItemRef href="#">
                            <span>store</span>
                            <img className='nav-arrow-down' src={images.arrowDown} alt="" />
                        </ItemRef>
                        <div className='prueba'>
                            <img src={images.triangle} className='triangle' alt="" />
                                <div className='content'>
                                    <p>Lorem amet consectetur adipis</p>
                                    <p>met consectetur adipisicing elit. Soluta, amet expedita! Soluta expedita porro tatum.</p>
                                </div>
                        </div>
                    </ItemNav>
                    <ItemNav>
                        <ItemRef href="#">
                            <span>about</span>
                            <img className='nav-arrow-down' src={images.arrowDown} alt="" /> 
                        </ItemRef>
                        <div className='prueba'>
                        <img src={images.triangle} className='triangle' alt="" />
                            <div className='content'>
                                <p>Lorem amet consectetur adipis</p>
                                <p>met consectetur adipisicing elit. Soluta, amet expedita! Soluta expedita porro tatum.</p>
                            </div>
                        </div>
                    </ItemNav>
                    
                    <ItemNav>
                        <ItemRef href="#">
                            <span>suport</span>
                            <img className='nav-arrow-down' src={images.arrowDown} alt="" />
                        </ItemRef>
                        <div className='prueba'>
                            <img src={images.triangle} className='triangle' alt="" />
                            <div className='content'>
                                <p>Lorem amet consectetur adipis</p>
                                <p>met consectetur adipisicing elit. Soluta, amet expedita! Soluta expedita porro tatum.</p>
                            </div>
                        </div>
                    </ItemNav>
                    <ItemNav>
                        <ItemRef href="#">
                            <span>log in</span>
                            <img className='nav-arrow-down' src={images.arrowDown} alt="" />
                        </ItemRef>
                        <div className='prueba'>
                        <img src={images.triangle} className='triangle' alt="" />
                            <div className='content'>
                                <p>Lorem amet consectetur adipis</p>
                                <p>met consectetur adipisicing elit. Soluta, amet expedita! Soluta expedita porro tatum.</p>
                            </div>
                        </div>
                    </ItemNav>
                </BarList>
            </BarContainer>
            <OthersContainer>
                <CartContainer>
                    <CartItem>
                        <img src={images.cart} className='cart-img' alt="" />
                        <span>0</span>
                    </CartItem>
                </CartContainer>
                <SearchContainer>
                    <img src={images.loupe} alt="" />
                </SearchContainer>
            </OthersContainer>
        </NavContainer>
    )
}

export default Header