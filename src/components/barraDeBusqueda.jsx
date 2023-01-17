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
const Busqueda = ({ setNombre}) => {
    let searchBtn= (e) => {
      e.preventDefault();
    };
    return(
        <form>
            <input onChange={(e) => {
                setNombre(e.target.value)
                }} id="headerbusqueda--search" type="text" placeholder="Buscar..." 
            />
            <button onClick={searchBtn} className="btn__headerbusqueda"><img id="header__busqueda__img" src={require('../assets/img/Vector.png')} alt="" /></button>
        </form>
    )
  };
export default Busqueda;