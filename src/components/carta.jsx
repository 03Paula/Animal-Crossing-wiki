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
 * @param {string} item.image_uri - Imagen de cada pez,insecto o criatura.
 * @param {string} item.icon_uri - Icono de cada pez,insecto o criatura.
 * @param {string} item.name - Muestra el nombre del pez,insecto o criatura.
 * @param {string} item.availability - Muestra los meses en números que está en el hemisferio norte.
 * @param {string} item.availability - Muestra los meses en números que está en el hemisferio sur.
 * @param {string} item.availability - Muestra donde se consigue.
 * @param {string} item.availability - Muestra el nivel de rareza.
 * @param {string} item.shadow - Muestra la sombra si tiene, si no estará en blanco.
 * @param {string} item.price - Muestra su el precio al que se vende.
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
                            <img className="imagen" src={item.image_uri} alt="" />
                            <h6><img className='icono' src={item.icon_uri} alt="" /> {item.name['name-USen']}</h6>
                            <div className="container">
                            <p>Availability Nothern: {item.availability['month-northern']}</p>
                            <p>Availability Southern: {item.availability['month-southern']}</p>
                            <p>Location: {item.availability['location']}</p>
                            <p>Rarity: {item.availability['rarity']}</p>
                            <p> Shadow: {item.shadow}</p>
                            <p>Price: {item.price}</p>
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