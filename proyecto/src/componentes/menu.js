import React from 'react'
import './css/menu.css';

const menu = () => {
    return(

        <nav className='menu'>
            <div className= 'titulo'>    
                <h1>Portafolio de servicios</h1>
            </div>
                <div className='contenido'>
       
                    <a href="#Servicios">Servicios</a>
                    <a href="#Nosotros">Nosotros</a>
                    <a href="#inicio">Inicio</a>
                </div>
        </nav>
    );

}

export default menu;