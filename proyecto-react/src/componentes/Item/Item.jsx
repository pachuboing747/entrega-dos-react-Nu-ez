import React from "react";
import { Link } from "react-router-dom";

const Item = ({lista}) =>{
    return(
    <div className="tarjeta">
        <img src={lista.img}/>
        <div className="text-tarjeta">
            <h4>{lista.nombre}</h4>
            <p>Precio: ${lista.precio}</p>
            < Link className="btn-mas" to={`/item/${lista.id}`}>Ver mas</Link>
        </div>
    </div>
    )
}

export default Item
