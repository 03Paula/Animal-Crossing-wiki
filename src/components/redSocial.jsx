import React from "react";

function RedSocial(props)
{
    
    return (
        <img
            className={`${props.className}`}
            src={require(`../assets/img/${props.img}`)}
            onClick = {() =>{
                window.open(`${props.enlace}`, '_blank')
            }
        }
        />
    )
}

export default RedSocial;