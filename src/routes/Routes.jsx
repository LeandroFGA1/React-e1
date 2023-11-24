import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home"
import About from '../pages/about/About'
import Store from '../pages/store/Store';

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/about" element={<About/>} />
            <Route path='store' element ={<Store/>}/>
        </Routes>
    )
}

export default MainRoutes