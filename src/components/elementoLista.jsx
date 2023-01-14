import React from "react";
import Button from "./boton";

function ElementoLista(props)
{
    return (
        <article>
            <img src={require(`../assets/img/${props.imagenelemento}`)} className="lista__vecinos" />
            <h5>{`${props.nombre}`}</h5>
            <p class="lista__p">{`${props.info}`}</p>
            <Button
                className='lista__boton btn--small'
                direction='producto'
                texto='Ver'
            />
        </article>
        
    )
}

export default ElementoLista;