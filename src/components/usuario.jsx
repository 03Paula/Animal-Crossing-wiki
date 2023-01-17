/**
 * @file contacto.jsx
 * @author Paula Flor García
 */

import React from "react";
import BotonCerrarSesion from "./botonCerrarSesion";
import Button from "./boton";
import HeaderRegistro from "./headerRegistro";
import Flecha from "./flecha";
import FooterUsuario from "./footerUsuario";
import Inactividad from "./inactividad";

/**
 * @module Usuario
 */

/**
 * Componente para la página de visualización de usuario
 * @memberof module:Usuario
 * 
 * @returns {JSX}
 */

function Usuario(){
    return(
        <html>
            <HeaderRegistro />
            <Inactividad />
            <main>
                <section className="usuario">
                    <section className="imagen-usuario">
                        <img src={require('../assets/img/Resetti.png')} alt="Avatar del usuario" />
                        <Button 
                            className='btn--mediumDesktop--usuario'
                            texto='Cambiar imagen'
                        />
                    <h1>{`${localStorage.getItem('usuario')}`}</h1>
                    </section> 

                    <section className="info-usuario"> 
                    <h5 className="info-usuario__h5">Nombre : {`${localStorage.getItem('nombre')}`}</h5>
                    <h5 className="info-usuario__h5">Apellidos : {`${localStorage.getItem('apellidos')}`}</h5>
                    <h5 className="info-usuario__h5">Correo Electrónico : {`${localStorage.getItem('email')}`}</h5>
                    <h5 className="info-usuario__h5">Número de teléfono : {`${localStorage.getItem('numero')}`}</h5>
                    <h5 className="info-usuario__h5">Nombre de usuario : {`${localStorage.getItem('usuario')}`}</h5>
                    <BotonCerrarSesion />
                    </section>
                </section>

                <section className="mostrar-favorito">
                    <h5 id="Favoritos" >Favoritos</h5>
                    <Flecha 
                        url="/listado.html"
                    />
                </section>
                
            </main>
            
            <FooterUsuario />

        </html>
        
    )
}

export default Usuario;