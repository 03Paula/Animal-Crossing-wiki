/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */

import React from "react";
import { useNavigate } from 'react-router-dom';
/**
 * @module HeaderLista
 */

/**
 * Componente para el header de la página de Listado.
 * @memberof module:HeaderLista
 * 
 * @returns {JSX}
 */

function HeaderLista()
{
    const navigate = useNavigate();
    return(
        <html>
            <header>
            <section className="header" >
                <img className="header__logo" src={require('../assets/img/logo.webp')} onClick={() => navigate('/')} alt="Logo del Animal Crossing"/>
                <section className="headerbusqueda">
                        <img src={require('../assets/img/persona.png')} onClick={() => navigate('/inicioSesion.html')} alt="Icono de una persona" style={{visibility: localStorage.getItem('usuario') ? "hidden" : "visible" }} />
                        <p style={{visibility: localStorage.getItem('usuario') ? "hidden" : "visible" }}><a href="inicioSesion.html">Iniciar Sesion</a></p>
                        <img src={require('../assets/img/Resetti.png')} className="header--imagenRedonda" onClick={() => navigate('/usuario.html')} alt="avatar del usuario"  style={{visibility: localStorage.getItem('usuario') ? "visible" : "hidden" }} />
                        <p className="headerbusqueda__p" onClick={() => navigate('/usuario.html')}>{localStorage.getItem('usuario')}</p>
                </section>
            </section>
        </header>
        
        </html>
    )
}

export default HeaderLista;