import React from "react";

function RedSocial(props)
{
    return (
        <img
            className="inicio__redesSociales__redes"
            src={require(`../assets/img/${props.img}`)}
            onclick={`${props.enlace}`}
        />
    )
}

export default RedSocial;