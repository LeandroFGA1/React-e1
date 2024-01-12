import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home/Home"
import Login from '../pages/log/Login'
import GameStore from '../pages/gameStore/GameStore'
function MainRoutes() {
    return (
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path='/store' element ={<GameStore/>}/>
        </Routes>
    )
}

export default MainRoutes