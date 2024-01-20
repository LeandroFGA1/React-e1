import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/log/Login';
import GameStore from '../pages/gameStore/GameStore';
import About from '../pages/about/About';
import Suport from '../pages/suport/Suport';
import Action from "../pages/gameStore/categories/Action";
import Adventure from "../pages/gameStore/categories/Adventure";
import Arcade from "../pages/gameStore/categories/Arcade"
import RPG from "../pages/gameStore/categories/RPG"
import Retro from "../pages/gameStore/categories/Retro"
import OpenWorld from "../pages/gameStore/categories/OpenWorld"
import Online from "../pages/gameStore/categories/Online"
import Multiplayer from "../pages/gameStore/categories/Multiplayer"
import Fps from "../pages/gameStore/categories/Fps"
import Fantasy from "../pages/gameStore/categories/Fantasy";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function MainRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                index
                element={
                    <>
                        <ScrollToTop />
                        <Home />
                    </>
                }
            />
            <Route path="/login" element={<>
                <ScrollToTop />
                <Login />
            </>} />
            <Route path="/store" element={<>
                <ScrollToTop />
                <GameStore />
            </>} />
            <Route path="/about" element={<>
                <ScrollToTop />
                <About />
            </>} />
            <Route path="/suport" element={<>
                <ScrollToTop />
                <Suport />
            </>} />
            {/* categories */}
            <Route path='/store/action' element={<>
                <ScrollToTop />
                <Action />
            </>} />
            <Route path='/store/adventure' element={<>
                <ScrollToTop />
                <Adventure />
            </>} />
            <Route path='/store/arcade' element={<>
                <ScrollToTop />
                <Arcade />
            </>} />
            <Route path='/store/fantasy' element={<>
                <ScrollToTop />
                <Fantasy />
            </>} />
            <Route path='/store/fps' element={<>
                <ScrollToTop />
                <Fps />
            </>} />
            <Route path='/store/multiplayer' element={<>
                <ScrollToTop />
                <Multiplayer />
            </>} />
            <Route path='/store/online' element={<>
                <ScrollToTop />
                <Online />
            </>} />
            <Route path='/store/open-world' element={<>
                <ScrollToTop />
                <OpenWorld />
            </>} />
            <Route path='/store/retro' element={<>
                <ScrollToTop />
                <Retro />
            </>} />
            <Route path='/store/rpg' element={<>
                <ScrollToTop />
                <RPG />
            </>} />
        </Routes>
    );
}

export default MainRoutes;
