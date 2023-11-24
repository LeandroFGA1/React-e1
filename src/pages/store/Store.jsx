import React from 'react'
import { Link } from 'react-router-dom'
import StoreContent from "../../components/store/Store"
function Store() {
    return (
        <div>
            <h1>Store</h1>
            <Link to="/">Ir a la página inicial</Link>
            <br/>
            <Link to ="/about">ir a about</Link>
            <StoreContent showGames={true}/>
            
        </div>
    )
}

export default Store