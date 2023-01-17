/**
 * @file carta.jsx
 * @author Paula Flor García
 */

import React from "react"; 

/**
 * @param {Array} favorito -> Se almacenaran los personajes favoritos.
 */
let favorito = [];

/**
 * @module Carta
 */

/**
 * Devuelve los datos de la Api
 * 
 * @param {string} item.image_uri - Imagen de cada personaje.
 * @param {string} item.icon_uri - Icono de cada personaje.
 * @param {string} item.name - Muestra el nombre del personaje.
 * @param {string} item.personality - Muestra la personalidad del personaje.
 * @param {string} item.birthday - Muestra el cumpleaños del personaje.
 * @param {string} item.species - Muestra la especie del personaje.
 * @param {string} item.gender - Muestra el género del personaje.
 * @param {string} item.hobby - Muestra el hobby del personaje.
 * @param {string} item.saying - Muestra su frase.
 * @memberof module:Carta
 * 
 * @returns {JSX}
 */

function Carta({personajes}){
    return (
        <div className="row">
            {
                personajes.map((item , index) => (
                    <div key={index} className="col">
                        <div className="card" style={{minWidth: '200px'}}>
                            <img src={item.image_uri} alt="" />
                            <h6><img className='icono' src={item.icon_uri} /> {item.name['name-USen']}</h6>
                            <div className="container">
                            <p>Personality: {item.personality}</p>
                            <p>Birthday: {item.birthday}</p>
                            <p>Species: {item.species}</p>
                            <p>Gender: {item.gender}</p>
                            <p>Hobby: {item.hobby}</p>
                            <p>Phrase: {item.saying}</p>
                            </div>
                            <button className="btn--mediumDesktop" onClick={favorito.unshift(item.id)}>Add to favourites</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Carta;