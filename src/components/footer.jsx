/**
 * @file footer.jsx
 * @author Paula Flor García
 */

import React from "react";
import RedSocial from "./redSocial";

/**
 * @module Footer
 */


/**
 * Componente para el footer
 * @memberof module:Footer
 * 
 * @returns {JSX}
 */

function Footer()
{
    <footer>
        <section className="footerSesion"> 
            <RedSocial 
                img='twitter.png'
                onclick="http://twitter.com/"
            />
            <RedSocial 
                img='discord.png'
                onclick=""
            />
                            
            <RedSocial 
                img='facebook.png'
                onclick=''
            />
    
            <RedSocial
                img='instagram.png'
                onclick=''
            />   
            <p className="footer__p"> <a href="contacto.html">Contáctanos</a> </p>
        </section>
    </footer>

}

export default Footer;