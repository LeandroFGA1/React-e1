import React from 'react';
import Header from "../components/header/Header"
import Footer from '../components/footer/Footer';
import CardAddBotton from '../components/buttons/AddCard';
import PriceBox from '../components/buttons/Price';
import Clock from '../components/buttons/Price';

const MainLayout = ({ children }) => {
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
    );
};

export default MainLayout;
