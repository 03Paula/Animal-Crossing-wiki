import React from "react";

function BotonSesion(props){
    return(
        <button type="submit" className="btn--mediumDesktop" onClick={`${props.funcion}`}>{props.texto}</button>
    )
}

export default BotonSesion;