/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */

import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import Header from "./headerIndex";
import Button from "./boton";
import RedSocial from "./redSocial";
import Inactividad from "./inactividad";
/**
 * @module Index
 */

/**
 * Componente para la página de inicio (home).
 * @memberof module:Index
 * 
 * @returns {JSX}
 */

function Index(){

    return (
        <html>
            <body>
            <Header />
            <Inactividad />
            <ReactAudioPlayer
                src={require("../assets/audio/Bubblegum.mp3")}
                autoPlay
                controls
                
            />
               
            <section className="inicio">
                <section className="inicio__imagen2">
                    <img id="inicio__imagen2--juego" src={require('../assets/img/foto3.jpg')} alt="Imagen del juego animal Crossing New Horizons" />
                </section>

                <section className="inicio__personaje">
                    <img className="personaje__personajes" id="personaje__personajes--isabelle" src={require('../assets/img/isabelle2.png')} alt="Imagen de Isabelle" />
                    <img className="personaje__personajes"  src={require('../assets/img/Tom_Nook.webp')} alt="Imagen de Tom Nook" />
                </section>

                <section className="inicio__bienvenida">
                    <h1 id="inicio__bienvenida--h1">Animal Crossing Wiki</h1>
                    <p className="p-desktop inicio__bienvenida--p">
                        Bienvenid@ a la wiki de Animal Crossing 
                        donde podrás encontrar toda la información 
                        relativa a los peces, criaturas marinas y insectos 
                        del juego de Animal Crossing New 
                        Horizon.
                    </p>
                    <Button 
                        className="btn--largeDesktop"
                        direction="listado"
                        texto="Ir a la página"
                    />

                    <section className="inicio__redesSociales">
                        <RedSocial 
                            className='inicio__redesSociale__redes'
                            img='twitter.png'
                            enlace="http://twitter.com/"
                        />
                        <RedSocial 
                            className='inicio__redesSociale__redes'
                            img='discord.png'
                            enlace="https://discord.com"
                        />
                        
                        <RedSocial 
                            className='inicio__redesSociale__redes'
                            img='facebook.png'
                            enlace='https://es-es.facebook.com'
                        />

                        <RedSocial
                            className='inicio__redesSociale__redes'
                            img='instagram.png'
                            enlace='https://www.instagram.com'
                        />   
                    </section>
                </section>
            </section>
        </body>
    </html>
        
    )
}

export default Index;