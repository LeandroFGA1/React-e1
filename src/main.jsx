import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header/Header.jsx'
import Hero from './components/hero/Hero.jsx'
import Store from './components/store/Store.jsx'
import About from './components/about/About.jsx'

ReactDOM.createRoot(document.getElementById("header")).render(
  <React.StrictMode>
    <Header/>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero/>
    <Store/>
    <About/>
  </React.StrictMode>,
)
