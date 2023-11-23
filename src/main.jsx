import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from 'react-router-dom';
import { MenuProvider } from './components/context/MenuContext.jsx';
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Store from './components/store/Store.jsx';
import About from './components/about/About.jsx';

const mainRoot = document.getElementById('root');



ReactDOM.createRoot(mainRoot).render(
  <React.StrictMode>
    <MenuProvider>
      <BrowserRouter>
        <Header />
        <Hero />
        <Store />
        <About />
      </BrowserRouter>
    </MenuProvider>
    
  </React.StrictMode>
);
