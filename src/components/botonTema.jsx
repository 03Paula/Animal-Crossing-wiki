/**
 * @file botonTema.jsx
 * @author Paula Flor García
 */

import React, { useState, useEffect } from 'react';

/**
 * Componente para el botón de cambio de tema.
 * El tema se almacenará en el localStorage y cuando hagamos click al botón
 * el tema cambiará.
 * Por defecto el tema es claro.
 * @returns {JSX}
 */

function BotonTema()
{
  
  const [tema, setTema ] = useState (localStorage.getItem('tema') || 'claro' );
  const cambioTema = () => 
  {
    if (tema === 'claro'){
      setTema('oscuro')
    }
    else{
      setTema('claro')
    }
  };

  useEffect(() => {
    localStorage.setItem('tema', tema)
    document.body.className = tema;
  },[tema]);

    return(
        <button className="btn--diaNoche" onClick={cambioTema} >
            <img src={require('../assets/img/sol.png')} />
            
        </button>
    )
}

export default BotonTema;