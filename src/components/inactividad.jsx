/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */


/**
 * @param {Int} tiempo Almacenará el tiempo
 */

let tiempo;

/**
 * @module Inactividad
 */

/**
 * Componente para la Inactividad del usuario en la página.
 * @memberof module:Inactividad
 * 
 * @returns {JSX}
 */

function Inactividad(){

    /**
     * @description Función que registra la actividad del usuario a través del movimiento del ratón
     * @name RegistrarInactividad
     * @function
     * @memberof module:Inactividad
     * 
     */

    function RegistrarInactividad(){
        window.onload = Reiniciar;
        document.onmousemove = Reiniciar;
        document.onload = Reiniciar;
        document.onmousemove = Reiniciar;
    }
    
    /**
     * @description Función que hace que aparezca un mensaje cuando se pasa el tiempo y no ha habido movimiento de ratón.
     * @name MensajeInactividad
     * @function
     * @memberof module:Inactividad
     * 
     */

    function MensajeInactividad(){
        alert('¿Sigues ahí?');
    }
    
    /**
     * @description Función que reinicia el tiempo y llama a MensajeInactividad para que aparezca el mensaje cuando haya pasado 2 minutos.
     * @name Reiniciar
     * @function 
     * @memberof module:Inactividad
     * 
     */

    function Reiniciar(){
        clearTimeout(tiempo);
        tiempo = setTimeout(MensajeInactividad, 120000)
    }
    return(
        RegistrarInactividad()
    )
}
export default Inactividad;