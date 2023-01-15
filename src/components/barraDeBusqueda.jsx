import React from "react";

function Busqueda(){
    return(
        <section>
            <input id="headerbusqueda--search" type="search" placeholder="buscar..." />
            <button className="btn__headerbusqueda"><img id="header__busqueda__img" src={require('../assets/img/Vector.png')} /></button>
        </section>
    )
}

export default Busqueda;