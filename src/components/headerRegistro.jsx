import { logDOM } from "@testing-library/react";
import React from "react";
import { useNavigate } from 'react-router-dom';
import BotonTema from "./botonTema";

function HeaderRegistro()
{
    const navigate = useNavigate();
    return(
        <header>
            <section className="header">
            <img className="header__logo" src={require('../assets/img/logo.webp')} onClick={() => navigate('/')} />
            <section className="header__inicioSesion">
                <BotonTema />
            </section>
        </section>
        </header>
        
    )
}

export default HeaderRegistro;