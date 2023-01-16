import React, { useEffect, useState } from "react";
import HeaderLista from "./headerLista";
import Inactividad from "./inactividad";
import Carta from "./carta";
import Busqueda from "./barraDeBusqueda";
import FooterSesion from "./footerSesion";



function Lista(){

    const [personajes, setPersonajes] = useState([]);
    const [nombre, setNombre] = useState('');
    const [nombreOrdenado, setNombreOrnado] = useState(undefined);

    const inicialUrl = "http://acnhapi.com/v1a/villagers";

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
            <Busqueda />
            <main>
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