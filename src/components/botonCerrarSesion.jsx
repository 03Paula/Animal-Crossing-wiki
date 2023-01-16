/**
 * @file botonCerrarSesión
 * @author Paula Flor García
 */

import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Componente para cerrar sesión.
 * @function CerrarSesion Borra los datos almacenados anteriormente introducidos en el
 *          localStorage y nos redirige a la página home.
 * @returns {JSX}
 */

function BotonCerrarSesion(){
    const navigate = useNavigate();
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
