import React from 'react'
import './css/Nosotros.css';
import logo from './Img/logo.jpg'


const nosotros = () => {
    return(
        <footer id='Footer' className="Nosotros">
        <section className="grupo-1">
            <article className="box">
                <figure>
                    <a href="#">
                    <img src={logo} alt="logo"/>
                    </a>
                </figure>
            </article>
            <section className="box">
                <h2>SOBRE NOSOTROS:</h2>
                <p> Paginas web</p>
                <p> Seo</p>
                <p> Aplicativos web</p>
            </section>
        

        </section>
 
   
    </footer>
    );
}

export default nosotros;;