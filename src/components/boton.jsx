/**
 * @file boton.jsx
 * @author Paula Flor García.
 */

import React from "react";
/**
 * @module Button
 */

/**
 * 
 * Componente para los botones
 * @memberof module:Button
 * @param {string} props.className - Asignamos una clase para el estilo de cada botón.
 * @param {string} props.direction - Se asigna una url para que cuando cliquee vaya a esta.
 * @param {string} props.texto - Texto que tendrá el botón.
 * 
 * @returns {JSX}
 */

function Button(props) 
{
    return (
        <button className={`${props.className}`}>
            <a href={`${props.direction}.html`} 
                >{`${props.texto}`} 
            </a>
        </button>
    )
}

export default Button;