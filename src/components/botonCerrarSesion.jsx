import React from "react";
import { useNavigate } from "react-router-dom";

function BotonCerrarSesion(){
    const navigate = useNavigate();
    function CerrarSesion(){
    
        if(window.confirm('¿Estas seguro de que quieres cerrar sesión?')){
            localStorage.clear();
            navigate('index.html')
        }
    }

    return(
        <button className="btn--mediumDesktop--usuario1 btn--mediumDesktop" onClick={() => CerrarSesion}>Cerrar Sesión</button>

    )
}

export default BotonCerrarSesion;
