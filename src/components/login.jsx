import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import HeaderRegistro from "./headerRegistro";
import BotonSesion from './botonSesion';
import FooterSesion from "./footerSesion";

const usuarios = [
    {nombre:'paula', apellidos:'flor garcía', email:'pflogar@g.educaand.es', numero:'345216789', usuario:'paula', contrasenia:'Pestillo123' },
    {nombre:'usuario', apellidos:'usuario prueba', email:'usuario@gmail.es', numero:'000123467', usuario:'usuario', contrasenia:'Pestillo123' },
];

function Login()
{
    const navigate = useNavigate();

    const [values, Setvalues] = useState({
        usuario:'',
        contrasenia:'',

        usuarioError:false,
        contraseniaError:false,
    });

    function handleSubmit(e){
        e.preventDefault();

        for (let i = 0; i < usuarios.length(); i++){
            if (usuarios[i].usuario == values.usuario && usuarios[i].contrasenia == values.contrasenia){
                localStorage.setItem("nombre", usuarios[i].nombre);
                localStorage.setItem("apellidos", usuarios[i].apellidos);
                localStorage.setItem("email", usuarios[i].email);
                localStorage.setItem("numero", usuarios[i].numero);
                localStorage.setItem("usuario", usuarios[i].usuario);
                localStorage.setItem("contraseña", usuarios[i].contrasenia);
                alert("Has iniciado sesión correctamente.")
                navigate('/listado.html')
            }
        }
    }

    function handleChange(e){
        const { target } = e;
        const { name, value } = target;
        const newValues ={
            ...values, [name]: value
        };

        Setvalues(newValues);
    }

    function handleUsuarioError(){
        let usuario = false;
        for (let i = 0; i < usuarios.length(); i++){
            if(usuarios[i].usuario == values.usuario){
                usuario = true;
            }
        }
        const usuarioError = !usuario;
        Setvalues((prevState) => ({ ...prevState, usuarioError}));
    }

    function handleContraseniaError(){
        let contrasenia = false;
        for (let i = 0; i < usuarios.length(); i++){
            if(usuarios[i].contrasenia == values.contrasenia){
                contrasenia = true;
            }
        }

        const contraseniaError = !contrasenia;
        Setvalues((prevState) => ({ ...prevState, contraseniaError}));
    }


    return (
        <html>
            <main>
            <HeaderRegistro />
            <section className="formulario">
            <h2 className="formulario__h2">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <input class="formulario__input" type="text" name="nombre" id="nombre" placeholder="Nombre de usuario" 
                            value={values.usuario} onChange={handleChange} onBlur={handleUsuarioError} aria-errormessage='usuarioError' aria-invalid={values.usuarioError}
                            required 
                    />
                    <span className='error' id="usuarioError" aria-live='assertive' style={{visibility: values.usuarioError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        El nombre de usuario no está registrado.
                    </span>
                    <input class="formulario__input" type="password" name="contrasenia" id="contrasenia" placeholder="Contraseña" 
                            value={values.contrasenia} onChange={handleChange} onBlur={handleContraseniaError} aria-errormessage='contraseñaError' aria-invalid={values.contraseniaError}
                            required 
                    />
                    <span className='error' id="contraseñaError" aria-live='assertive' style={{visibility: values.contraseniaError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        La contraseña no es correcta.
                    </span>
                    <p class="formulario__p"><a class="formulario__p" href="registro.html">No estoy registrado</a></p>                    
                    <BotonSesion 
                        funcion='handleSubmit'
                        texto='Iniciar Sesion'
                    />
                </form>
            </section>
        </main>
        <FooterSesion />
        </html>
        
    )
}

export default Login;
