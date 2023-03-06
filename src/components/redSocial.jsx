/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */

import React from "react";

/**
 * @module RedSocial
 */

/**
 * Componente para las redes sociales.
 * @param {string} props.className Le pasamos el nombre de la clse para que se le puedan aplicar los estilos correspondientes. 
 * @param {string} props.img Le pasamos la url del icono de la red social
 * @param {string} props.enlace Le pasamos el enlace a la página de la red social.
 * @memberof module:RedSocial
 * 
 * @returns {JSX}
 */

function RedSocial(props)
{
    
    return (
        <img
            className={`${props.className}`}
            src={require(`../assets/img/${props.img}`)}
            alt="icono de la red social"
            onClick = {() =>{
                window.open(`${props.enlace}`, '_blank')
            }
        }
        />
    )
}

export default RedSocial;