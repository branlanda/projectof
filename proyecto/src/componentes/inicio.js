import React from 'react'
import pagina from './Img/pagina.jpg'
import Screenshot_1 from './Img/Screenshot_1.jpg'
import styles from './css/inicio.css';




const  inicio = () => {
    return(
        <section id='inicio' className='inicio'>
            <div className='contenedorinicio'>
            <h2>inicio</h2> 
            <article className='Inicio1'>
            <h3>Servicios de creacion de paginas web</h3> 
            <p>Somos creadores de paginas web para todo tipo de servicios y servidores, nos adaptamos a cualquier tecnologia y aplicamos la mejor calidad para su empresa.
            </p>
                <figure>
                    <a href="#">
                    <img className="herramienta"   src={pagina} alt="pagina"/>
                    </a>
                </figure>
            </article>

            <article className='inicio2'>
            <h3>Tenemos amplia trayectoria en el desarrollo de sitios y aplicativos web </h3> 
            <p>Aportaremos nuestro conocimiento en negocios y estrategias de mercadeo para que su sitio pueda atraer clientes de manera exponencial</p>
                <figure>
                    <a href="#">
                    <img className="" alt=""/>
                    </a>
                </figure>
            </article>

            <article className='inicio3'>
            <h3>Un ejemplo de uno de nuestros sitios</h3> 
            <p>Este es una tienda online en wordpress creada por nosotros con escalabilidad </p>

            </article>
            </div>
        </section>
    );
}

export default inicio;