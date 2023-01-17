/**
 * @file botonCerrarSesión
 * @author Paula Flor García
 */

import React from "react";
import { useNavigate } from "react-router-dom";
/**
 * @module BotonCerrarSesion
 */

/**
 * @description Componente para el botón de cerrar sesión.
 * @memberof BotonCerrarSesion.
 * @returns {JSX}
 */

function BotonCerrarSesion(){
    const navigate = useNavigate();

    /**
     * @description Función que usaremos para que cuando el usuario pulse el botón aparezca el mensaje de cerrar sesión, si este acepta se borraran los datos almacenados en el localStorage y se redirigirá a la página de incio.
     * @name CerrarSesion 
     * @function
     * @memberof module:BotonCerrarSesion
     */
    
    function CerrarSesion(){
    
        if(window.confirm('¿Estas seguro de que quieres cerrar sesión?')){
            localStorage.clear();
            navigate('/')
        }
    }

    return(
        <button className="btn--mediumDesktop--usuario1 btn--mediumDesktop" onClick={CerrarSesion}>Cerrar Sesión</button>
    )
}

export default BotonCerrarSesion;
