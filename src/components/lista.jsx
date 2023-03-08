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

    let [personajes, setPersonajes] = useState([]);
    let [nombre, setNombre] = useState('');

    let inicialUrl = `http://acnhapi.com/v1a/fish`;

    function visualizarInfo(){

        (async function () {
            let data = await fetch(inicialUrl).then((res) => res.json());
            setPersonajes(data)
        })();
        console.log(inicialUrl)
    }

    /**
     * @description Cambia la url para que se pueda visualizar los peces 
     * @name visualizarPeces
     * @function
     * @memberof module:Lista
     * 
     */

    function visualizarPeces(){
        inicialUrl = `http://acnhapi.com/v1a/fish/?nombre=${nombre}`;
        (async function () {
            let data = await fetch(inicialUrl).then((res) => res.json());
            setPersonajes(data)
          })();
        console.log(inicialUrl)
    }

    /**
     * @description Cambia la url para que se pueda visualizar los insectos 
     * @name visualizarInsectos
     * @function
     * @memberof module:Lista
     * 
     */

    function visualizarInsectos(){
        inicialUrl = `http://acnhapi.com/v1a/bugs`;
        (async function () {
            let data = await fetch(inicialUrl).then((res) => res.json());
            setPersonajes(data)
        })();
    }

    /**
     * @description Cambia la url para que se pueda visualizar los criaturas marinas. 
     * @name visualizarCriaturas
     * @function
     * @memberof module:Lista
     * 
     */

    function visualizarCriaturas(){
        inicialUrl = `https://acnhapi.com/v1a/sea`;
        (async function () {
            let data = await fetch(inicialUrl).then((res) => res.json());
            setPersonajes(data)
        })();
    }

    useEffect(() => {
        (async function () {
          let data = await fetch(inicialUrl).then((res) => res.json());
          setPersonajes(data)
        })();
      }, [inicialUrl]);

    return(
        <>
            <HeaderLista />
            <Inactividad />
            <main>
            <Busqueda setNombre={setNombre} />
            <section class="filtrado">
                <label class="filtrado__label" for="filtrar">Filtrar por: </label>
            </section>
            <div className='filtro'>
                <button type="submit" className="btn--mediumDesktop"  onClick={visualizarPeces}>Peces</button>
                <button type="submit" className="btn--mediumDesktop" onClick={visualizarInsectos}>Insectos</button>
                <button type="submit" className="btn--mediumDesktop" onClick={visualizarCriaturas}>Criaturas marinas</button>
            </div>
            <div className="lista">
                <Carta personajes={personajes} />
            </div>
                <FooterSesion />
            </main>
        </>
    )
}

export default Lista;