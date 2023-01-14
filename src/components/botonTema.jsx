import React, { useState, useEffect } from 'react';

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