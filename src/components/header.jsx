import React from "react";


function Header()
{
    return (
        <section className="header">
            <img className="header__logo" src={require('../assets/img/logo.webp')} alt="Logo de la página" />
            <section className="header__inicioSesion">
                <img src={require('../assets/img/persona.png')} onClick="location.href='inicioSesion.html'" alt="Icono de una persona" />
                <p><a href="inicioSesion.html">Iniciar Sesion</a></p>
            </section>
        </section>
    )
}

export default Header;
