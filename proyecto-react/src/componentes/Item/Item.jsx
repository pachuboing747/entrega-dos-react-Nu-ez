import React from "react";

const Item = ({lista}) =>{
    return(
    <div>
        <img src={lista.img}/>
        <div>
            <h4>{lista.nombre}</h4>
            <p>Precio: ${lista.precio}</p>
            <p>Descripción:{lista.descripcion}</p>
          <a href={`/item/${lista.id}`}>Ver mas</a>
        </div>
    </div>
    )
}

export default Item
