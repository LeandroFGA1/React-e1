import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home"
import Login from '../pages/log/Login'
import GameStore from '../pages/gameStore/GameStore'
import About from '../pages/about/About';
import Suport from '../pages/suport/Suport';
function MainRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path='/store' element ={<GameStore/>}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='/suport' element={<Suport/>}/>
        </Routes>
    )
}

export default MainRoutes