import React from "react";
import RedSocial from "./redSocial";

function FooterSesion(){
    return(
        <footer>
            <section className="footerSesion">
                <RedSocial 
                    className="footerSesion__redes"
                    img="twitter.png"
                    onClick="https://twitter.com"
                />

                <RedSocial
                    className="footerSesion__redes"
                    img="discord.png"
                    onClick="https://discord.com"
                />

                <RedSocial 
                    className="footerSesion__redes"
                    img="facebook.png"
                    onClick="https://es-es.facebook.com"
                />

                <RedSocial 
                    className="footerSesion__redes"
                    img="instagram.png"
                    onClick="https://www.instagram.com"
                />
                <p className="footer__p" ><a href="contacto.html">Contáctanos</a></p>
            </section>

            <section className="imagenBienvenida">
                <img className="imagenBienvenida__imagen" src={require(`../assets/img/Bienvenida.png`)} />
            </section>
        </footer>
    )
}

export default FooterSesion;