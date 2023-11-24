import React from 'react'
import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <h2>Acerca de nosotros</h2>
            {/* Contenido de la página Acerca de nosotros */}
            <Link to="/">Ir al inicio</Link>
            <br/>
            <Link to="/store"> ir a tienda</Link>
        </div>
    )
}

export default About