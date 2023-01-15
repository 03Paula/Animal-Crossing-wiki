import React, { useEffect, useState } from "react";
import HeaderLista from "./headerLista";
import Inactividad from "./inactividad";
import Carta from "./carta";
import Busqueda from "./barraDeBusqueda";
import FooterSesion from "./footerSesion";


function Lista(){

    const [personajes, setPersonajes] = useState([]);

    const url = "http://acnhapi.com/v1a/villagers";

    const fetchResultados = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => setPersonajes(data))
            .catch(error => console.log(error))
    } 

    useEffect(() => {
        fetchResultados(url);
    },[])

   
    return(
        <>
            <HeaderLista />
            <Inactividad />
            <main>
            <section class="filtrado">
                <label class="filtrado__label" for="filtrar">Filtrar por: </label>
                    <select class="filtrado__select" name="filtrar" id="filtrar">
                        <option class="filtrado__opciones" value="0"></option>
                        <option class="filtrado__opciones" value="Vecinos">Vecinos</option>
                        <option class="filtrado__opciones" value="Insectos">Insectos</option>
                        <option class="filtrado__opciones" value="Personajes">Personajes</option>
                        <option class="filtrado__opciones" value="Musica">Música</option>
                        <option class="filtrado__opciones" value="Fosiles">Fosiles</option>
                        <option class="filtrado__opciones" value="Peces">Peces</option>
                        <option class="filtrado__opciones" value="Obras">Obras de arte</option>
                        <option class="filtrado__opciones" value="Muebles">Muebles</option>
                        <option class="filtrado__opciones" value="Criaturas">Criaturas marinas</option>
                        <option class="filtrado__opciones" value="Ropa">Ropa</option>
                        <option class="filtrado__opciones" value="Herramientas">Herramientas</option>
                    <option class="filtrado__opciones" value="Eventos">Eventos</option>

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