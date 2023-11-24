import React from 'react'
import { Link } from 'react-router-dom'

function Store() {
    return (
        <div>
            <h1>Store</h1>
            <Link to="/">Ir a la página inicial</Link>
            <br/>
            <Link to ="/about">ir a about</Link>
            
        </div>
    )
}

export default Store