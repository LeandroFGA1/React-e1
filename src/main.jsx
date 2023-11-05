import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header.jsx'
import BarContainer from './components/header/barContainer/BarContainer'
import Hero from './components/header/hero/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    
  </React.StrictMode>,
)
