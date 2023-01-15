import React from "react";

let tiempo;

function RegistrarInactividad(){
    window.onload = Reiniciar;
    document.onmousemove = Reiniciar;
    document.onload = Reiniciar;
    document.onmousemove = Reiniciar;
}

function inactividad(){
    alert('¿Sigues ahí?');
}

function Reiniciar(){
    clearTimeout(tiempo);
    tiempo = setTimeout(inactividad, 120000)
}

function Inactividad(){
    return(
        RegistrarInactividad()
    )
}
export default Inactividad;