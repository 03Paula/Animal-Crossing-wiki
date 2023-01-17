/**
 * @file contacto.jsx
 * @author Paula Flor García
 */

import React, { useState } from "react";
import HeaderRegistro from "./headerRegistro";
import BotonSesion from "./botonSesion";
import { useNavigate } from "react-router-dom";
import Inactividad from "./inactividad";
import RedSocial from "./redSocial";

/**
 * Expresión regular para el nombre, en el que se darán por validos los valores de más de 3 letras y los espacios, para los nombre que son compuestos.
 * @type {Object}
 */

const regNombre = new RegExp(/^[A-z]{3,}[\s]*[A-z]*/);

/**
// Expresión regular para el email.
 * @type {Object}
 */

const regEmail =  new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
/**
 * @module Contacto
 */

/**
 * Componente de la página de contacto.
 * @memberof module:Contacto
 * 
 * @returns {JSX}
 */

function Contacto() {

    const navigate = useNavigate();

    const [values, Setvalues] = useState({
        nombreCompleto:'',
        emailContacto:'',
        comentario:'',

        nombreCompletoError:false,
        emailContactoError:false,
        comentarioError:false,
    });

    /**
     * @description Función que comprueba si todo está correcto aparecerá el mensaje y redigirá al listado
     * @name handleSubmit
     * @function
     * @param e 
     * @memberof module:Contacto
     */

    function handleSubmit(e){
        e.preventDefault();

        if(!values.nombreCompletoError && !values.emailContactoError){
            alert('Su comentario ha sido enviado');
            navigate('/listado.html');
        }
    }

    /**
     * @description Función que actualiza los valores con los introducidos por el input.
     * @name handleChange
     * @function
     * @param e 
     * @memberof module:Contacto
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
     * @description Función que dependiendo de si el nombre pasa o no la expresión regular, cambia el valor a la variable nombreCompletoError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleNombreCompletoError
     * @function 
     * @memberof module:Contacto
     */

    function handleNombreCompletoError(){
        const nombreCompletoError = !regNombre.test(values.nombreCompleto);
        Setvalues((prevState) => ({ ...prevState, nombreCompletoError}));
    }

    /**
     * @description Función que dependiendo de si el email pasa o no la expresión regular, cambia el valor a la variable emailContactoError, que es la que hace que aparezca o no el mensaje de error.
     * @name handleEmailContactoError
     * @function
     * @memberof module:Contacto
     */

    function handleEmailContactoError(){
        const emailContactoError = !regEmail.test(values.emailContacto);
        Setvalues((prevState) => ({ ...prevState, emailContactoError}));
    }

    /**
     * @description Función que dependiendo de si el comentario es mayor de 10 palabras, si no es así aparece el mensaje.
     * @name handleComentarioError
     * @function 
     * @memberof module:Contacto
     */
    function handleComentarioError(){
        const comentarioError = !(values.comentario.length >= 10);
        Setvalues((prevState) => ({ ...prevState, comentarioError}));
    }

    return(
        <html>
            <HeaderRegistro />
            <Inactividad />
            <main>
                <section className="contactanos">
                    <article className="contactar1">
                        <h2 className="contactar1__h2">Contáctanos</h2>

                        <h6 className="contactar1__h6">Si tienes alguna duda, comentario o 
                            sugerencia, puedes contactarnos y
                            nos comunicaremos contigo lo
                            antes posible.
                        </h6>
                        <img id="contactar1__mabel" src={require("../assets/img/Mabel_NH.webp")} />
                    </article>

                    <article className="contactar2">
                        <form onSubmit={handleSubmit}>
                            <label className="contactar2__label" for="nombre">Nombre Completo</label>
                            <input className="contactar2__input" type="text" name="nombre" id="nombre" 
                                value={values.nombre} onChange={handleChange} onBlur={handleNombreCompletoError} aria-errormessage="nombreCompletoError"  aria-invalid={values.nombreCompletoError} 
                            required 
                                />
                            <span className="error" id="nombreCompletoError" aria-live="assertive" style={{visibility: values.nombreCompletoError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                                No has introducido un nombre válido.
                            </span>
                            <label className="contactar2__label" for="email" value={values.emailContacto} onChange={handleChange} onBlur={handleEmailContactoError} aria-errormessage="emailContactoError"  aria-invalid={values.emailContactoError} 
                                    required >Email</label>
                            <input className="contactar2__input" type="email" name="email" id="email" 
                                    value={values.emailContacto} onChange={handleChange} onBlur={handleEmailContactoError} aria-errormessage="emailContactoError"  aria-invalid={values.emailContactoError} 
                                    required 
                                />
                            <span className="error" id="emailContactoError" aria-live="assertive" style={{visibility: values.emailContactoError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                                No has introducido un email válido.
                            </span>
                            <label className="contactar2__label" for="Comentarios">Comentarios</label>
                            <textarea className="contactar2__textarea" name="Comentarios" id="Comentarios" placeholder="Escriba su comentario..." 
                                value={values.comentario} onChange={handleChange} oonBlur={handleComentarioError} aria-errormessage="comentarioError" aria-invalid={values.comentarioError}
                                required >
                            </textarea>
                            <span className="error" id="comentarioError" aria-live="assertive" style={{visibility: values.comentarioError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                                No has introducido un comentario.
                            </span>
                            <BotonSesion
                                funcion='handleSubmit'
                                texto='Enviar'
                            />
                            
                        </form>
        
                        <article className="contactar2__redesSociales">
                            <RedSocial 
                                className="footerSesion__redes"
                                img="twitter.png"
                                onClick="https://twitter.com"
                            />

                            <RedSocial
                                className="footerSesion__redes"
                                img="discord.png"
                                onClick="https://discord.com"
                            />

                            <RedSocial 
                                className="footerSesion__redes"
                                img="facebook.png"
                                onClick="https://es-es.facebook.com"
                            />

                            <RedSocial 
                                className="footerSesion__redes"
                                img="instagram.png"
                                onClick="https://www.instagram.com"
                            />
                        </article>
                    </article>

                </section>
            </main>
        </html>
    )
}

export default Contacto;