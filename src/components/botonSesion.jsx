/**
 * @file botonSesion
 * @author Paula Flor García
 */

import React from "react";

/**
 * 
 * @param {string} props.funcion -> Cuando cliquemos sobre el botón se llevará a cabo la función que se pase.
 * @param {string} props.texto -> Texto que tendrá el botón.
 * 
 * @returns {JSX}
 */

function BotonSesion(props){
    return(
        <button type="submit" className="btn--mediumDesktop" onClick={`${props.funcion}`}>{props.texto}</button>
    )
}

export default BotonSesion;