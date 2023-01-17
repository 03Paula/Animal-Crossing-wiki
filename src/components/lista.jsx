/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */

import React, { useEffect, useState } from "react";
import HeaderLista from "./headerLista";
import Inactividad from "./inactividad";
import Carta from "./carta";
import Busqueda from "./barraDeBusqueda";
import FooterSesion from "./footerSesion";

/**
 * @module Lista
 */

/**
 * Componente para la página de Listado
 * @memberof module:Lista
 * 
 * @returns {JSX}
 */

function Lista(){

    const [personajes, setPersonajes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [nombreOrdenado, setNombreOrnado] = useState(undefined);

    const inicialUrl = "http://acnhapi.com/v1a/villagers";

    /**
     * @description Función que actualiza los valores con los introducidos por el input.
     * @name handleChange
     * @function 
     * @param e 
     * @memberof module:Lista
     * 
     */
    function handleChange(e){
        const { target } = e;
        const { name, value} = target;
        const newValues = {
            ...nombre, [name]:value
        };

        setNombre(newValues)
    }


    function handleBuscarPersonaje(){
        for (let i = 0; i < personajes.length ; i ++){
            let personaje = personajes[i]
            if(Object.values(personaje) == nombre){
                personajes = personajes[i];
            }
        }
    }
   
    /**
     * @description Enlaza la api y nos devuelve los datos.
     * @name fetchResultados
     * @function
     * @param {string} url Url de la api
     */
    const fetchResultados = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPersonajes(data))
            .catch(error => console.log(error))
    } 

    useEffect(() => {
        fetchResultados(inicialUrl);
    },[])

    return(
        <>
            <HeaderLista />
            <Inactividad />
            <main>
            <input id="headerbusqueda--search" type="search" placeholder="Buscar..." name='nombre' onChange={handleChange} value={nombre}/>
            <button className="btn__headerbusqueda"><img id="header__busqueda__img" src={require('../assets/img/Vector.png')} onClick={handleBuscarPersonaje}/></button>
            <section class="filtrado">
                <label class="filtrado__label" for="filtrar">Filtrar por: </label>
                    <select class="filtrado__select" name="categoria" id="filtrar" >
                        <option class="filtrado__opciones" value="vecinos">Vecinos</option>
                        <option class="filtrado__opciones" value="insectos" >Insectos</option>                        
                        <option class="filtrado__opciones" value="peces">Peces</option>

                    </select>
            </section>
            <div className="lista">
                <Carta personajes={personajes} />
            </div>
                <FooterSesion />
            </main>
        </>
    )
}

export default Lista;