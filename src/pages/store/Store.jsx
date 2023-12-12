import React from 'react'
import { Link } from 'react-router-dom'
import StoreContent from "../../components/store/Store"
import { Provider } from 'react-redux'
import store from '../../utilities/store'
function Store() {
    return (
        <>
            <h1>Store</h1>
            <Link to="/">Ir a la página inicial</Link>
            <br/>
            <Link to ="/about">ir a about</Link>
            <Provider store={store}>
                <StoreContent showGames={true}/>
            </Provider>
            
            
        </>
    )
}

export default Store