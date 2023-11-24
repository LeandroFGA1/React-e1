import React from 'react'
import Search from './search/Search'
import Cart from './cart/Cart'
import styled from 'styled-components'

const SCContainer = styled.div`
    display:flex;
    align-items: center;

`;

function SearchCartContainer() {
    return (
        <SCContainer>
            <Cart/>
            <Search/>
        </SCContainer>
    )
}

export default SearchCartContainer