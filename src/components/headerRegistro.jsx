/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */
import React from "react";
import { useNavigate } from 'react-router-dom';
import BotonTema from "./botonTema";
/**
 * @module HeaderRegistro
 */

/**
 * Componente para el header de las páginas de Registro, login y Contacto
 * @memberof module:HeaderRegistro
 * 
 * @returns {JSX}
 */

function HeaderRegistro()
{
    const navigate = useNavigate();
    return(
        <header>
            <section className="header">
            <img className="header__logo" src={require('../assets/img/logo.webp')} alt="" onClick={() => navigate('/')} />
            <section className="header__inicioSesion">
                <BotonTema />
            </section>
        </section>
        </header>
        
    )
}

export default HeaderRegistro;