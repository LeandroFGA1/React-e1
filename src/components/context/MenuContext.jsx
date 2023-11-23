// MenuContext.jsx
import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const useMenuContext = () => {
    return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('home');

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <MenuContext.Provider value={{ currentPage, changePage }}>
            {children}
        </MenuContext.Provider>
    );
};
