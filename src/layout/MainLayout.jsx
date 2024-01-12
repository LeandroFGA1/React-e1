import React from 'react'
import Header from '../components/header/Header'

function MainLayout({children}) {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer></footer>
        
        </>
    )
}

export default MainLayout