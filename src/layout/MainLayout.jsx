import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function MainLayout({children}) {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        
        </>
    )
}

export default MainLayout