// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../../components/hero/Hero';
import Store from '../../components/store/Store';
import About from "../../components/about/About"

const HomePage = () => {
    return (
        <>
            <Hero/>
            <Store showGames={false}/>
            <About/>
        </>
        
    );
};

export default HomePage;
