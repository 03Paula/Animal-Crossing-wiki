import React from "react";
import HeaderRegistro from "./headerRegistro";
import Button from "./button";

function Contacto() {
    return(
        <html>
            <HeaderRegistro />
            <main>
                <section className="contactanos">
                    <article className="contactar1">
                        <h2 className="contactar1__h2">Contáctanos</h2>

                        <h6 className="contactar1__h6">Si tienes alguna duda, comentario o 
                            sugerencia, puedes contactarnos y
                            nos comunicaremos contigo lo
                            antes posible.
                        </h6>
                        <img id="contactar1__mabel" src={require("../assets/img/Mabel_NH.webp")} />
                    </article>

                    <article className="contactar2">
                        <form>
                            <label className="contactar2__label" for="Nombre">Nombre Completo</label>
                            <input className="contactar2__input" type="text" name="Nombre" id="Nombre" required />
                            <label className="contactar2__label" for="Email">Email</label>
                            <input className="contactar2__input" type="email" name="Email" id="Email" required />
                            <label className="contactar2__label" for="Comentarios">Comentarios</label>
                            <textarea clasNames="contactar2__textarea" name="Comentarios" id="Comentarios" placeholder="Escriba su comentario..." required >
                            </textarea>
                            <Button 
                                clasNames='btn--small'
                                texto='Enviar'
                            />
                            
                        </form>
        
                        <article className="contactar2__redesSociales">
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/twitter.png')} onclick="location.href='https://twitter.com/'" />
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/discord.png')} onclick="location.href='https://discord.com/'" />
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/instagram.png')} onclick="location.href='https://www.instagram.com/'" />
                            <img className="contactar2__redesSociales__redes" src={require('../assets/img/facebook.png')} onclick="location.href='https://es-es.facebook.com/'" />
                        </article>
                    </article>

                </section>
            </main>
        </html>
    )
}

export default Contacto;