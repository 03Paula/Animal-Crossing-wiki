import React, { useState } from "react";
import HeaderLista from "./headerLista";
import Inactividad from "./inactividad";

const categorias = [
    "Vecinos",
    "Insectos",
    "Música",
    "Fósiles",
    "Peces",
    "Obras de arte",
    "Muebles",
    "Criaturas Marinas"
]

function Lista(){
    const [resultado,setResultado] = useState([]);
    const [nombre, SetNombre] = useState('');
    const [categoria, SetCategoria] = useState('Vecinos');
    const [ordenarPorNombre, SetOrdenarPorNombre] = useState(undefined);

    function handleOrdenarPorNombreDesc(){
        SetOrdenarPorNombre(false);
    }

    function handleOrdenarPorNombreAsc(){
        SetOrdenarPorNombre(true);
    }

    
    return(
        <html>
            <HeaderLista />
            <Inactividad />
            <main>
                
            </main>
        </html>
    )
}

export default Lista;