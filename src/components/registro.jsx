import React from "react";
import HeaderRegistro from "./headerRegistro";
import Button from "./button";
import FooterSesion from "./footerSesion";

function Registro()
{
    let tema;

    return(
        <html tema='claro'>
            <HeaderRegistro />

            <main>
                <section className="formulario">
                    <h2 className="formulario__h2">Registro de usuario</h2>
                    <form>
                    <input className="formulario__input" type="text" name="nombre" id="nombre" placeholder="Nombre" required />
                    <input className="formulario__input" type="text" name="apellidos" id="apellidos" placeholder="Apellidos" required />
                    <input className="formulario__input" type="text" name="email" id="email" placeholder="Correo Electrónico" required />
                    <input className="formulario__input" type="text" name="numero" id="numero" placeholder="Número de teléfono" required />
                    <input className="formulario__input" type="text" name="usuario" id="usuario" placeholder="Nombre de usuario" required />
                    <input className="formulario__input" type="password" name="contrasenia" id="contrasenia" placeholder="Contraseña" required />
                    <input className="formulario__input" type="password" name="repcontrasenia" id="repcontrasenia" placeholder="Repita la contraseña" required />
                    <Button 
                        className='btn--mediumDesktop'
                        direction='listado'
                        texto='Regístrame'
                    />
                    </form>
                </section>
            </main>
            <FooterSesion />
        </html>
    )
}

export default Registro;