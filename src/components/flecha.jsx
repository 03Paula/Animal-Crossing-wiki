/**
 * @file flecha.jsx
 * @author Paula Flor García
 */

import React from "react";
import { useNavigate } from 'react-router-dom';

/**
 * @module Flecha
 */

/**
 * Componente flecha - permite volver a la página anterior.
 * @param {string} props.url - Pasamos la url a la página que queremos volver. 
 * @memberof module:Flecha
 *  
 * @returns {JSX}
 */

function Flecha (props) 
{
    const navigate = useNavigate();
    
    return(
        <img id="volver" src={require('../assets/img/flecha.png')} alt="Icono de una flecha" onClick={() => navigate(`${props.url}`)} />
    )
}

export default Flecha;