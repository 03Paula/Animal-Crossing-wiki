import React from "react";
import { useNavigate } from 'react-router-dom';

function Flecha (props) 
{
    const navigate = useNavigate();
    
    return(
        <img id="volver" src={require('../assets/img/flecha.png')} alt="Icono de una flecha" onClick={() => navigate(`${props.url}`)} />
    )
}

export default Flecha;