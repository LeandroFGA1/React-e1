import React, { Children } from 'react'
import "../../assets/styles/colors.css"
import styled from 'styled-components'
const Box = styled.div`
    width: fit-content;
    height: 40px;
    background-color: transparent;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 5px;
`;
function PriceBox({price}) {
    return (
        <Box>
            <span>$ {price}</span>
        </Box>
    )
}


export default PriceBox
