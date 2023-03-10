/**
 * @file footerSesion.jsx
 * @author Paula Flor García.
 */

import React, { useEffect, useState } from "react";
import HeaderLista from "./headerLista";
import Inactividad from "./inactividad";
import Carta from "./carta";
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
    const [busqueda, setBusqueda]= useState("");

    let inicialUrl = `http://acnhapi.com/v1a/fish`;

    /**
     * @description Cambia la url para que se pueda visualizar los peces 
     * @name visualizarPeces
     * @function
     * @memberof module:Lista
     * 
     */

    function visualizarPeces(){
        document.querySelector('.lista__filtro').innerHTML = 'Peces'
        inicialUrl = `http://acnhapi.com/v1a/fish`;
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
        document.querySelector('.lista__filtro').innerHTML = 'Insectos'
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
        document.querySelector('.lista__filtro').innerHTML = 'Criaturas marinas'
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


      const handleChange=e=>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
      }

      const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=personajes.filter((elemento)=>{
          if(elemento.name['name-USen'].toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
          ){
            return elemento;
          }
        });
        setPersonajes(resultadosBusqueda);
    }

    return(
        <>
            <HeaderLista />
            <Inactividad />
            <main>
            <input id="headerbusqueda--search" type="text" placeholder="Buscar..." value={busqueda} onChange={handleChange}>
            </input>
            <button className="btn__headerbusqueda"><img id="header__busqueda__img" src={require('../assets/img/Vector.png')} alt="" /></button>
            <section class="filtrado">
                <label class="filtrado__label" for="filtrar">Filtrar por: </label>
            </section>
            <div className='filtro'>
                <button type="submit" className="btn--mediumDesktop"  onClick={visualizarPeces}>Peces</button>
                <button type="submit" className="btn--mediumDesktop" onClick={visualizarInsectos}>Insectos</button>
                <button type="submit" className="btn--mediumDesktop" onClick={visualizarCriaturas}>Criaturas marinas</button>
            </div>
            <h2 className="lista__filtro"></h2>
            <div className="lista">
                <Carta personajes={personajes} />
            </div>
                <FooterSesion />
            </main>
        </>
    )
}

export default Lista;