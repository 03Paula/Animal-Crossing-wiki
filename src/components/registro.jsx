/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */

import React, {useState} from "react";
import HeaderRegistro from "./headerRegistro";
import FooterSesion from "./footerSesion";
import BotonSesion from "./botonSesion";
import Inactividad from "./inactividad";
import { useNavigate } from "react-router-dom";

    /**
     * Expresión regular para el email.
     * Para ser válida tiene que tener letras o número al principio, seguido del signo @ y un dominio, luego un . y más letras.
     * @type {Object}
     */

    const regEmail = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

    /**
     * Expresión regular para la contraseña
     * Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minúscula y al menos un dígito. 
     * @type {Object}
     */

    const regContrasenia = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)

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
    
    const regTel = new RegExp(/(\+34|0034|34)?[ -]*[ -]*([0-9][ -]*){9}/)

/**
 * @module Registro
 */

/**
 * Componente para la página de registro.
 * @memberof module:Registro
 * @returns {JSX}
 */
function Registro()
{
    const navigate = useNavigate();

    const [values, Setvalues] = useState({
        nombre:'',
        apellidos:'',
        email:'',
        numero:'',
        genero:'',
        usuario:'',
        contrasenia:'',
        repcontrasenia:'',

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
     * @description Función que comprueba si todo está correcto aparecerá el mensaje, guardará en el localStorage los datos y redigirá al listado
     * @name handleSubmit
     * @function
     * @memberof module:Registro
     * @param e 
     */
    function handleSubmit(e){
        e.preventDefault();

        if(!values.nombreError && !values.apellidosError && !values.emailError && !values.numeroError 
            && !values.usuarioError && !values.contraseniaError)
            {
                localStorage.setItem("nombre", values.nombre);
                localStorage.setItem("apellidos", values.apellidos);
                localStorage.setItem("email", values.email);
                localStorage.setItem("numero", values.numero);
                localStorage.setItem("genero", values.genero);
                localStorage.setItem("usuario", values.usuario);
                localStorage.setItem("contraseña", values.contrasenia);
                alert(`Se ha registrado correctamente. Bienvenido ${localStorage.getItem('usuario')}`);
                navigate('/listado.html')
            }
    }

    /**
     * @description Función que actualiza los valores con los introducidos por el input.
     * @name handleChange
     * @function
     * @param e 
     * @memberof module:Registro
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
     * @memberof module:Registro
     */

    function handleNombreError(){
        const nombreError = !regNombre.test(values.nombre);
        Setvalues((prevState) => ({ ...prevState, nombreError}));
    }

    /**
     * @description Función que dependiendo de si el apellido pasa o no la expresión regular, cambia el valor a la variable apellidoError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleApellidoError
     * @function 
     * @memberof module:Registro
     */

    function handleApellidoError(){
        const apellidosError = !regNombre.test(values.apellidos);
        Setvalues((prevState) => ({ ...prevState, apellidosError}));
    }

    /**
     * @description Función que dependiendo de si el email pasa o no la expresión regular, cambia el valor a la variable emailError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleEmailError
     * @function 
     * @memberof module:Registro
     */

    function handleEmailError(){
        const emailError = !regEmail.test(values.email);
        Setvalues((prevState) => ({ ...prevState, emailError}));
    }

    /**
     * @description Función que dependiendo de si el número pasa o no la expresión regular, cambia el valor a la variable numeroError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleNumeroError
     * @function 
     * @memberof module:Registro
     */

    function handleNumeroError(){
        const numeroError = !regTel.test(values.numero);
        Setvalues((prevState) => ({...prevState,numeroError}));
    }

    /**
     * @description Función que dependiendo de si el nombre de usuario pasa o no la expresión regular, cambia el valor a la constante usuarioError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleUsuarioError
     * @function 
     * @memberof module:Registro
     */

    function handleUsuarioError(){
        const usuarioError = !regNombreUsu.test(values.usuario);
        Setvalues((prevState) => ({ ...prevState, usuarioError}));
    }

    /**
     * @description Función que dependiendo de si la contraseña pasa o no la expresión regular, cambia el valor a la constante contraseniaError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleContraseniaError
     * @function 
     * @memberof module:Registro
     */

    function handleContraseniaError(){
        const contraseniaError = !regContrasenia.test(values.contrasenia);
        console.log(contraseniaError)
        Setvalues((prevState) => ({ ...prevState, contraseniaError})); 
    }

    /**
     * @description Función que dependiendo de si la repetición de la contraseña es igual a o no a la contraseña anteriormente introducida, cambia el valor a la constante repContraseniaError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleRepContraseniaError
     * @function 
     * @memberof module:Registro
     */

    function handleRepContraseniaError(){
        const repContraseniaError = (values.contrasenia !== values.repcontrasenia);
        Setvalues((prevState) => ({ ...prevState, repContraseniaError}));
    }

    /**
     * @description Función que dependiendo de si se ha escogido o no género , cambia el valor a la constante generoError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleGenereError
     * @function 
     * @memberof module:Registro
     */
    
    function handleErrorGenero(){
        const generoError = !(values.genero === '');
        Setvalues((prevState) => ({ ...prevState, generoError}));
    }
    
    return(
        <html>
            <HeaderRegistro />
            <Inactividad />
            <main>
                <section className="formulario">
                    <h2 className="formulario__h2">Registro de usuario</h2>
                    <form onSubmit={handleSubmit}>
                    <input className="formulario__input" type="text" name="nombre" id="nombre" placeholder="Nombre"
                            value={values.nombre} onChange={handleChange} onBlur={handleNombreError} aria-errormessage="nombreError"  aria-invalid={values.nombreError} 
                            required 
                        />
                    <span className="error" id="nombreError" aria-live="assertive" style={{visibility: values.nombreError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        Nombre inválido.Por favor introduzca un nombre válido.
                    </span>
                    <input className="formulario__input" type="text" name="apellidos" id="apellidos" placeholder="Apellidos"
                            value={values.apellidos} onChange={handleChange} onBlur={handleApellidoError} aria-errormessage="apellidosError" aria-invalid={values.apellidosError} 
                            required 
                        />
                    <span className="error" id="apellidosError" aria-live="assertive" style={{visibility: values.apellidosError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        Apellidos inválidos.Por favor introduzca unos apellidos válidos.
                    </span>
                    <input className="formulario__input" type="email" name="email" id="email" placeholder="Correo Electrónico" 
                            value={values.email} onChange={handleChange} onBlur={handleEmailError} aria-errormessage="emailError" aria-invalid={values.emailError}
                            required 
                        />
                    <span className="error" id="emailError" aria-live="assertive" style={{visibility: values.emailError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        Email inválido.Por favor introduzca un email válido.
                    </span>
                    <input className="formulario__input" type="text" name="numero" id="numero" placeholder="Número de teléfono" 
                            value={values.numero} onChange={handleChange} onBlur={handleNumeroError} aria-errormessage="numeroError" aria-invalid={values.numeroError} 
                            required 
                        />
                    <span className="error" id="numeroError" aria-live="assertive" style={{visibility: values.numeroError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        Numéro inválido.Por favor introduzca un número de teléfono válido.
                    </span>
                    

                    <fieldset>
                        <legend>Género: </legend>
                        <input type="radio" name="genero" id="genero" 
                                value={values.genero} onChange={handleChange} onBlur={handleErrorGenero} aria-errormessage="generoError" aria-invalid={values.genero} 
                                required
                            />
                        <label className="radioLabel" for='hombre'>Hombre</label>
                        <input type="radio" name="genero" id="genero" 
                                value={values.genero} onChange={handleChange} onBlur={handleErrorGenero} aria-errormessage="generoError" aria-invalid={values.genero} 
                                required
                            />
                        <label className="radioLabel" for='mujer'>Mujer</label>
                        <input type="radio" name="genero" id="genero" 
                                value={values.genero} onChange={handleChange} onBlur={handleErrorGenero} aria-errormessage="generoError" aria-invalid={values.genero} 
                                required
                            />
                        <label className="radioLabel"  for='otro'>Otro</label>
                        <span className="error" id="generoError" aria-live="assertive" style={{visibility: values.generoError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'80px', color:'#76674ac5', fontWeight:'bold'}}>
                            No ha seleccionado ninguna opción.
                        </span>
                    </fieldset>


                    <input className="formulario__input" type="text" name="usuario" id="usuario" placeholder="Nombre de usuario" 
                            value={values.usuario} onChange={handleChange} onBlur={handleUsuarioError} aria-errormessage="usuarioError" aria-invalid={values.usuarioError} 
                            required 
                        />
                    <span className="error" id="usuarioError" aria-live="assertive" style={{visibility: values.usuarioError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        Nombre de usuario inválido.Por favor introduzca un nombre de usuario válido.
                    </span>
                    <input className="formulario__input" type="password" name="contrasenia" id="contrasenia" placeholder="Contraseña" 
                            value={values.contrasenia} onChange={handleChange} onBlur={handleContraseniaError} aria-errormessage="contraseñaError" aria-invalid={values.contraseniaError} 
                            required 
                        />
                    <span className="error" id="contraseñaError" aria-live="assertive" style={{visibility: values.contraseniaError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        Contraseña inválida.Por favor introduzca una contraseña válida.
                    </span>
                    <input className="formulario__input" type="password" name="repcontrasenia" id="repcontrasenia" placeholder="Repita la contraseña" 
                            value={values.repcontrasenia} onChange={handleChange} onBlur={handleRepContraseniaError} aria-errormessage="repContraseñaError" aria-invalid={values.repContraseniaError} 
                            required 
                        />
                    <span className="error" id="repContraseñaError" aria-live="assertive" style={{visibility: values.repContraseniaError? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                        Las contraseñas no coinciden.
                    </span>
                    <p class="formulario__p"><a class="formulario__p" href="inicioSesion.html">Ya tengo cuenta</a></p>  
                    <BotonSesion
                        funcion='handleSubmit'
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