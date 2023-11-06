import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Store from './components/store/Store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <Store/>
  </React.StrictMode>,
)
