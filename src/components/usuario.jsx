/**
 * @file contacto.jsx
 * @author Paula Flor García
 */

import React, {useState} from "react";
import BotonCerrarSesion from "./botonCerrarSesion";
import HeaderRegistro from "./headerRegistro";
import FooterUsuario from "./footerUsuario";
import Inactividad from "./inactividad";
import { useNavigate } from "react-router-dom";

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

    /**
     * Expresión regular para el email.
     * Para ser válida tiene que tener letras o número al principio, seguido del signo @ y un dominio, luego un . y más letras.
     * @type {Object}
     */

    const regEmail = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

    /**
     * Expresión regular para el nombre de usuario.
     * La expresión será válida si tiene entre 4 y 16 letras y/o números.
     * @type {Object} 
     */
    const regNombreUsu = new RegExp(/^[\S]{4,16}$/); 

    /**
     * Expresion regular para el nombre y apellidos
     * Podrá tener más de 3 palabras, puede tener o no un espacio y otras palabras, para los nombres que son compuestos.
     * @type {Object}
     */

    const regNombre = new RegExp(/^[A-z]{3,}[\s]*[A-z]*/);

    /**
     * Expresion regular para numeros de teléfonos españoles.
     * Serán validos todos aquellos que tengan o no +34 , 34 o 0034 y tengan 9 números ya sean seguidos o separados por guiones.
     * @type {Object}
     */
    
    const regTel = new RegExp(/^(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}$/)

    const navigate = useNavigate();

    const [values, Setvalues] = useState({
        nombre:'',
        apellidos:'',
        email:'',
        numero:'',
        usuario:'',


        nombreError:false,
        apellidosError:false,
        emailError:false,
        numeroError:false,
        generoError:false,
        usuarioError:false,
        contraseniaError:false,
        regContrasenia:false
    });

    
    /**
     * @description Función que al cliquear en guardar datos se actualiza los datos nuevos y se elimina la clase active para que no se vea el formulario.
     * @name handleSubmit
     * @memberof module:Usuario
     * @function
     * @param e 
     */

    function handleSubmit(e){
        e.preventDefault();

        if(!values.nombreError && !values.apellidosError && !values.emailError && !values.numeroError 
            && !values.usuarioError)
            {
                if(values.nombre !== ''){
                    localStorage.setItem("nombre", values.nombre);
                }

                if (values.apellidos !== ''){
                    localStorage.setItem("apellidos", values.apellidos);
                }

                if (values.email !== ''){
                    localStorage.setItem("email", values.email);
                }
                
                if (values.numero !== ''){
                    localStorage.setItem("numero", values.numero);
                }

                if (values.usuario !== ''){
                    localStorage.setItem("usuario", values.usuario);
                }
                
                const cambiarDatos = document.querySelector('.cambiarDatosUsu');
                cambiarDatos.classList.remove('active')
                document.getElementById('mensajeRegistro').innerHTML = `Guardando cambios...`;
                var count = 2;
                setInterval(function(){
                    count--;
                    if(count === 0){
                        document.getElementById('mensajeRegistro').innerHTML = ``;
                        navigate('/usuario.html')
                    }
                },1000)
            }
    }

     /**
     * @description Función que actualiza los valores con los introducidos por el input.
     * @name handleChange
     * @function
     * @param e 
     * @memberof module:Usuario
     */

     function handleChange(e){
        const { target } = e;
        const { name, value } = target;
        const newValues ={
            ...values, [name]: value
        };

        Setvalues(newValues);
    }

    /**
     * @description Función que dependiendo de si el nombre pasa o no la expresión regular, cambia el valor a la variable nombreError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleNombreError
     * @function 
     * @memberof module:Usuario
     */

    function handleNombreError(){
        const nombreError = !regNombre.test(values.nombre);
        Setvalues((prevState) => ({ ...prevState, nombreError}));
    }

    /**
     * @description Función que dependiendo de si el apellido pasa o no la expresión regular, cambia el valor a la variable apellidoError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleApellidoError
     * @function 
     * @memberof module:Usuario
     */

    function handleApellidoError(){
        const apellidosError = !regNombre.test(values.apellidos);
        Setvalues((prevState) => ({ ...prevState, apellidosError}));
    }

    /**
     * @description Función que dependiendo de si el email pasa o no la expresión regular, cambia el valor a la variable emailError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleEmailError
     * @function 
     * @memberof module:Usuario
     */

    function handleEmailError(){
        const emailError = !regEmail.test(values.email);
        Setvalues((prevState) => ({ ...prevState, emailError}));
    }

    /**
     * @description Función que dependiendo de si el número pasa o no la expresión regular, cambia el valor a la variable numeroError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleNumeroError
     * @function 
     * @memberof module:Usuario
     */

    function handleNumeroError(){
        const numeroError = !regTel.test(values.numero);
        Setvalues((prevState) => ({...prevState,numeroError}));
    }

    /**
     * @description Función que dependiendo de si el nombre de usuario pasa o no la expresión regular, cambia el valor a la constante usuarioError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleUsuarioError
     * @function 
     * @memberof module:Usuario
     */

    function handleUsuarioError(){
        const usuarioError = !regNombreUsu.test(values.usuario);
        Setvalues((prevState) => ({ ...prevState, usuarioError}));
    }


    /**
     * @description Funcion que añade a la clase cambiarDatosUsu active para que muestre el formulario.
     * @name EditarDatos
     * @function 
     * @memberof module:Usuario
     */
    function EditarDatos(){
        const cambiarDatos = document.querySelector('.cambiarDatosUsu')
        cambiarDatos.className += ' active'
        
    }

    return(
        <html>
            <HeaderRegistro />
            <Inactividad />
            <main>
            <p className="mensajeRedireccion" id="mensajeRegistro"></p>
                <section className="usuario">
                    <section className="imagen-usuario">
                        <img src={require('../assets/img/Resetti.png')} alt="Avatar del usuario" />
                        <button className="btn--mediumDesktop--usuario btn__editar" onClick={EditarDatos}>Editar datos</button>
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

                <section className="cambiarDatosUsu" >
                    <section className="formulario formularioEditar">
                        <h2 className="formulario__h2">Edición de datos</h2>
                        <form onSubmit={handleSubmit}>
                        <input className="formulario__input" type="text" name="nombre" id="nombre" placeholder={localStorage.getItem('nombre')}
                                value={values.nombre} onChange={handleChange} onBlur={handleNombreError} aria-errormessage="nombreError"  aria-invalid={values.nombreError}
                        />
                        <span className="error" id="nombreError" aria-live="assertive" style={{visibility: values.nombreError ? "visible" : "hidden", fontSize:'14px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                            Nombre inválido.Debe de tener al menos 3 letras.
                        </span>
                        <input className="formulario__input" type="text" name="apellidos" id="apellidos" placeholder={localStorage.getItem('apellidos')}
                                value={values.apellidos} onChange={handleChange} onBlur={handleApellidoError} aria-errormessage="apellidosError" aria-invalid={values.apellidosError} 
                                 
                        />
                        <span className="error" id="apellidosError" aria-live="assertive" style={{visibility: values.apellidosError ? "visible" : "hidden", fontSize:'14px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                            Apellidos inválidos.Por favor introduzca unos apellidos válidos.
                        </span>
                        <input className="formulario__input" type="email" name="email" id="email" placeholder={localStorage.getItem('email')} 
                                value={values.email} onChange={handleChange} onBlur={handleEmailError} aria-errormessage="emailError" aria-invalid={values.emailError}
                                 
                        />
                        <span className="error" id="emailError" aria-live="assertive" style={{visibility: values.emailError ? "visible" : "hidden", fontSize:'14px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                            Email inválido.Por favor introduzca un email válido.
                        </span>
                        <input className="formulario__input" type="text" name="numero" id="numero" placeholder={localStorage.getItem('numero')} 
                                value={values.numero} onChange={handleChange} onBlur={handleNumeroError} aria-errormessage="numeroError" aria-invalid={values.numeroError} 
                                min='9' max={12} required
                        />
                        <span className="error" id="numeroError" aria-live="assertive" style={{visibility: values.numeroError ? "visible" : "hidden", fontSize:'14px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}} >
                            Numéro inválido.Por favor introduzca un número de teléfono válido.
                        </span>
                            <input className="formulario__input" type="text" name="usuario" id="usuario" placeholder={localStorage.getItem('usuario')} 
                                    value={values.usuario} onChange={handleChange} onBlur={handleUsuarioError} aria-errormessage="usuarioError" aria-invalid={values.usuarioError}   
                            />
                            <span className="error" id="usuarioError" aria-live="assertive" style={{visibility: values.usuarioError ? "visible" : "hidden", fontSize:'14px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                                Nombre de usuario inválido.Por favor introduzca un nombre de usuario que tenga entre 4 y 16 caracteres.
                            </span>
                            <button onClick={handleSubmit} className="guardarDatos" >Guardar datos</button>
                        </form>
                    </section>
                </section>
            </main>
            <FooterUsuario />
        </html>
        
    )
}

export default Usuario;