import React from "react";
import BotonTema from "./botonTema";
import { useNavigate } from 'react-router-dom';

function HeaderLista()
{
    const navigate = useNavigate();
    return(
        <html>
            <header>
            <section className="header" >
                <img className="header__logo" src={require('../assets/img/logo.webp')} onClick={() => navigate('/')} alt="Logo del Animal Crossing"/>
                <section className="headerbusqueda">
                        <img src={require('../assets/img/corazon.png')} className="headerbusqueda__img--favorito" alt="icono de corazón" />
                        <p className="headerbusqueda__p headerbusqueda__favorito" onClick={() => navigate('/usuario.html')}>Favoritos</p>
                        <img src={require('../assets/img/Resetti.png')} className="header--imagenRedonda" onClick={() => navigate('/usuario.html')} alt="avatar del usuario" />
                        <p className="headerbusqueda__p" onClick={() => navigate('/usuario.html')}>{localStorage.getItem('usuario')}</p>
                        <BotonTema />
                </section>
            </section>
        </header>
        
        </html>
    )
}

export default HeaderLista;