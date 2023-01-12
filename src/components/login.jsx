import React from "react";
import HeaderRegistro from "./headerRegistro";
import Button from "./button";
import FooterSesion from "./footerSesion";

function Login()
{
    let tema;

    return (
        <html tema='claro'>
            <HeaderRegistro />
            <body className="formulario">
            <h2 className="formulario__h2">Inicio de Sesión</h2>
                <form>
                    <input class="formulario__input" type="text" name="nombre" id="nombre" placeholder="Nombre de usuario" required />
                    <input class="formulario__input" type="password" name="contrasenia" id="contrasenia" placeholder="Contraseña" required />
                    <p class="formulario__p"><a class="formulario__p" href="registro.html">No estoy registrado</a></p>                    <Button 
                        className='btn--mediumDesktop' 
                        direction='listado'
                        texto='Iniciar Sesión'
                    />
                </form>
        </body>
        <FooterSesion />
        </html>
        
    )
}

export default Login;
