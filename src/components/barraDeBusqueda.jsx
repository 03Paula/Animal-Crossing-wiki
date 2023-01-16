import React from "react";
/**
 * @file barraDeBusqueda.jsx 
 * @author Paula Flor García
 */

/**
 * Componente para poder realizar busquedas.
 * @returns {JSX}
 */

function Busqueda(){
    return(
        <section>
            <input id="headerbusqueda--search" type="search" placeholder="Buscar..." />
            <button className="btn__headerbusqueda"><img id="header__busqueda__img" src={require('../assets/img/Vector.png')} /></button>
        </section>
    )
}

export default Busqueda;