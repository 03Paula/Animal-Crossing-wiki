import React from "react";

/**
 * 
 * @param {*} props 
 * @returns {JSX}
 */
function Button(props) 
{
    return (
        <button className={`${props.className}`}>
            <a href={`${props.direction}.html`} 
                >{`${props.texto}`} 
            </a>
        </button>
    )
}

export default Button;