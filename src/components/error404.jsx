/**
 * @file error404.jsx
 * @author Paula Flor García
 */

import React from "react";
import { useNavigate } from 'react-router-dom';
/**
 * @module Error404
 */

/**
 * Componente para la página de Error 404.
 * @memberof module:Error404
 * 
 * @returns {JSX}
 */

function Error404()
{
    const navigate = useNavigate();

    return(
        <html>
            <main>

                <section className="error">
                    <img className="error--tom" src={require('../assets/img/Tom_Nook.webp')} alt="Imagen de Tom Nook" />
                    <article className="dialogo">
                        <h5 className="dialogo--h5">Parece que te has quedado sin bayas...</h5>
                        <p id="dialogo--error">Error 404</p>
                        <h5 id="dialogo--respuesta" onClick= {() => navigate('/listado.html')} >Volver a la página</h5>
                    </article>
                    <div id="nombrePersonaje">
                        <p className="p-desktop">Tom Nook</p>
                    </div>
                    <img src={require('../assets/img/mano.png')} class="error__puntero" alt="" />
                </section>
        
            </main>
        </html>
    )
}

export default Error404;