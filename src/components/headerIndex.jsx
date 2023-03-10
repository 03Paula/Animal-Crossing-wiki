/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */
import React from "react";
import { useNavigate } from 'react-router-dom';
/**
 * @module Header
 */

/**
 * Componente para el header
 * @memberof module:Header
 * 
 * @returns {JSX}
 */

function Header()
{
    const navigate = useNavigate();
    return (
        <header>
            <section className="header">
            <img className="header__logo" src={require('../assets/img/logo.webp')} alt="Logo de la página" />
                <section className="header__inicioSesion">
                    <img src={require('../assets/img/persona.png')} onClick={() => navigate('/inicioSesion.html')} alt="Icono de una persona" style={{visibility: localStorage.getItem('usuario') ? "hidden" : "visible" }} />
                    <p style={{visibility: localStorage.getItem('usuario') ? "hidden" : "visible" }}> <a href="inicioSesion.html">Iniciar Sesion</a></p>
                </section>
            </section>
        </header>
        
    )
}

export default Header;
