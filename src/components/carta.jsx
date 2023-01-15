import React from "react"; 
import BotonSesion from "./botonSesion";

let favorito = [];

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
                            <p>Personality:{item.personality}</p>
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
console.log(favorito)

export default Carta;