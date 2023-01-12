import React from "react";
import BotonTema from "./buttonTema";
import { useNavigate } from 'react-router-dom';

function HeaderLista()
{
    const navegate = useNavigate();
    return(
        <header>
            <section className="header" >
                <img className="header__logo" src={require('../assets/img/logo.webp')} onClick={() => navegate('/')} alt="Logo del Animal Crossing"/>
                <section className="headerbusqueda">
                    <input id="headerbusqueda--search" type="search" placeholder="buscar..." />
                        <button className="btn__headerbusqueda"><img id="header__busqueda__img" src={require('../assets/img/Vector.png')} /></button>
                        <img src={require('../assets/img/corazon.png')} className="headerbusqueda__img--favorito" alt="icono de corazón" />
                        <p className="headerbusqueda__p headerbusqueda__favorito">Favoritos</p>
                        <img src={require('../assets/img/Resetti.png')} className="header--imagenRedonda" onClick={() => navegate('/usuario.html')} alt="avatar del usuario" />
                        <p className="headerbusqueda__p" onClick={() => navegate('/usuario.html')}>Usuario1</p>
                        <BotonTema />
                </section>
            </section>
        </header>
        
    )
}

export default HeaderLista;