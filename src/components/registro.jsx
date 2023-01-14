import React, {useState} from "react";
import HeaderRegistro from "./headerRegistro";
import FooterSesion from "./footerSesion";
import BotonSesion from "./botonSesion";
import { useNavigate } from "react-router-dom";

const regEmail = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

    /**
     * Minimo 8 caracteres, Maximo 15, Al menos una letra mayúscula, Al menos una letra minucula, Al menos un dígito, 
     */

    const regContrasenia = new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)

    const regNombreUsu = new RegExp(/^[\S]{4,16}$/); 

    /**
     * Expresion regular para el nombre y apellidos
     * Podrá tener más de 3 palabras, puede tener o no un espacio y otras palabras.
     */

    const regNombre = new RegExp(/^[A-z]{3,}[\s]*[A-z]*/);

    /**
     * Expresion regular para numeros de telefonos españoles.
     * Serán validos todos aquellos que tengan o no +34 , 34 o 0034 y tengan 9 números ya sean seguidos o separados por guiones.
     */
    const regTel = new RegExp(/(\+34|0034|34)?[ -]*[ -]*([0-9][ -]*){9}/)

function Registro()
{
    const navigate = useNavigate();

    const [values, Setvalues] = useState({
        nombre:'',
        apellidos:'',
        email:'',
        numero:'',
        usuario:'',
        contrasenia:'',
        repcontrasenia:'',

        nombreError:false,
        apellidosError:false,
        emailError:false,
        numeroError:false,
        usuarioError:false,
        contraseniaError:false,
        regContrasenia:false
    });

    function handleSubmit(e){
        e.preventDefault();

        if(!values.nombreError && !values.apellidosError && !values.emailError && !values.numeroError 
            && !values.usuarioError && !values.contraseniaError)
            {
                localStorage.setItem("nombre", values.nombre);
                localStorage.setItem("apellidos", values.apellidos);
                localStorage.setItem("email", values.email);
                localStorage.setItem("numero", values.numero);
                localStorage.setItem("usuario", values.usuario);
                localStorage.setItem("contraseña", values.contrasenia);
                alert(`Se ha registrado correctamente. Bienvenido ${localStorage.getItem('usuario')}`);
                navigate('/listado.html')
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

    function handleApellidoError(){
        const apellidosError = !regNombre.test(values.apellidos);
        Setvalues((prevState) => ({ ...prevState, apellidosError}));
    }

    function handleEmailError(){
        const emailError = !regEmail.test(values.email);
        Setvalues((prevState) => ({ ...prevState, emailError}));
    }

    function handleNumeroError(){
        const numeroError = !regTel.test(values.numero);
        Setvalues((prevState) => ({...prevState,numeroError}));
    }

    function handleUsuarioError(){
        const usuarioError = !regNombreUsu.test(values.usuario);
        Setvalues((prevState) => ({ ...prevState, usuarioError}));
    }

    function handleContraseniaError(){
        const contraseniaError = !regContrasenia.test(values.contrasenia);
        console.log(contraseniaError)
        Setvalues((prevState) => ({ ...prevState, contraseniaError})); 
    }

    function handleRepContraseniaError(){
        const repContraseniaError = (values.contrasenia !== values.repcontrasenia);
        Setvalues((prevState) => ({ ...prevState, repContraseniaError}));
    }

    return(
        <html>
            <HeaderRegistro />

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
                    <input className="formulario__input" type="text" name="email" id="email" placeholder="Correo Electrónico" 
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