import React from "react";
import { useNavigate } from 'react-router-dom';

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