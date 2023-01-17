import React from "react";
/**
 * @file barraDeBusqueda.jsx 
 * @author Paula Flor García
 */

/**
 * @module Busqueda
 */

/**
 * Componente para poder realizar busquedas.
 * @memberof module:Busqueda 
 * @returns {JSX}
 */

function Busqueda(props){
    return(
        <section>
            <input id="headerbusqueda--search" type="search" placeholder="Buscar..." value='personaje'/>
            <button className="btn__headerbusqueda"><img id="header__busqueda__img" src={require('../assets/img/Vector.png')} onClick={props.funcion}/></button>
        </section>
    )
}

export default Busqueda;