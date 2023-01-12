import React from "react";
import { useNavigate } from 'react-router-dom';

function Error404()
{
    const navigate = useNavigate();

    return(
        <html>
            <main>
                <section className="logotipo">
                    <img className="logotipo--logo" src={require('../assets/img/logo.webp')} alt="logo del animal crossing New Horizons" />
                </section>

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
                    <img src={require('../assets/img/mano.png')} class="error__puntero" />
                </section>
        
            </main>
        </html>
    )
}

export default Error404;