import React, { useState } from "react";
import HeaderRegistro from "./headerRegistro";
import BotonSesion from "./botonSesion";
import { useNavigate } from "react-router-dom";
import Inactividad from "./inactividad";

const regNombre = new RegExp(/^[A-z]{3,}[\s]*[A-z]*/);
const regEmail =  new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

function Contacto() {

    const navigate = useNavigate();

    const [values, Setvalues] = useState({
        nombre:'',
        email:'',
        comentario:'',

        nombreError:false,
        emailError:false,
        comentarioError:false,
    });

    function handleSubmit(e){
        e.preventDefault();

        if(!values.nombreError && !values.emailError){
            alert('Su comentario ha sido enviado');
            navigate('/listado.html');
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

    function handleNombreError(){
        const nombreError = !regNombre.test(values.nombre);
        Setvalues((prevState) => ({ ...prevState, nombreError}));
    }

    function handleEmailError(){
        const emailError = !regEmail.test(values.email);
        Setvalues((prevState) => ({ ...prevState, emailError}));
    }

    function handleComentarioError(){
        const comentarioError = (values.comentario.length != 0);
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
                            <label className="contactar2__label" for="Nombre">Nombre Completo</label>
                            <input className="contactar2__input" type="text" name="Nombre" id="Nombre" 
                                value={values.nombre} onChange={handleChange} onBlur={handleNombreError} aria-errormessage="nombreError"  aria-invalid={values.nombreError} 
                            required 
                                />
                            <span className="error" id="nombreError" aria-live="assertive" style={{visibility: values.nombreError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
                                No has introducido un nombre válido.
                            </span>
                            <label className="contactar2__label" for="Email" value={values.email} onChange={handleChange} onBlur={handleEmailError} aria-errormessage="emailError"  aria-invalid={values.emailError} 
                                    required >Email</label>
                            <input className="contactar2__input" type="email" name="Email" id="Email" 
                                    value={values.email} onChange={handleChange} onBlur={handleEmailError} aria-errormessage="emailError"  aria-invalid={values.emailError} 
                                    required 
                                />
                            <span className="error" id="emailError" aria-live="assertive" style={{visibility: values.emailError ? "visible" : "hidden", fontSize:'12px', fontFamily:'Sura', height:'10px', marginRight:'40px', color:'#76674ac5', fontWeight:'bold'}}>
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
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/twitter.png')} onclick="location.href='https://twitter.com/'" />
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/discord.png')} onclick="location.href='https://discord.com/'" />
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/instagram.png')} onclick="location.href='https://www.instagram.com/'" />
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/facebook.png')} onclick="location.href='https://es-es.facebook.com/'" />
                        </article>
                    </article>

                </section>
            </main>
        </html>
    )
}

export default Contacto;