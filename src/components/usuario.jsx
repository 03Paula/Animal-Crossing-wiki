import React from "react";
import Button from "./button";
import Header from "./headerIndex";
import FooterUsuario from "./footerUsuario";

function Usuario(props){
    return(
        <html>
            <Header />
            <main>
                <section className="usuario">
                    <section className="imagen-usuario">
                        <img src={require('../assets/img/Resetti.png')} alt="Avatar del usuario" />
                        <Button 
                            className='btn--mediumDesktop--usuario btn--mediumDesktop'
                            texto='Cambiar imagen'
                        />
                    <h1>{`${props.nombreUsuario}`}</h1>
                    </section> 

                    <section className="info-usuario"> 
                    <h5 className="info-usuario__h5">Nombre : {`${props.nombre}`}</h5>
                    <h5 className="info-usuario__h5">Apellidos : {`${props.apellido}`}</h5>
                    <h5 className="info-usuario__h5">Correo Electrónico : {`${props.correo}`}</h5>
                    <h5 className="info-usuario__h5">Número de teléfono : {`${props.telefono}`}</h5>
                    <h5 className="info-usuario__h5">Nombre de usuario : {`${props.nombreUsuario}`}</h5>
                    <Button 
                        className='btn--mediumDesktop--usuario1 btn--mediumDesktop'
                        texto='Cerrar Sesión'
                    />
                    </section>
                </section>

                <section className="mostrar-favorito">
                    <h5>Favoritos</h5>
                </section>
            </main>
            
            <FooterUsuario />

        </html>
        
    )
}

export default Usuario;