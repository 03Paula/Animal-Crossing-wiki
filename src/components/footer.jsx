import React from "react";
import RedSocial from "./redSocial";

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