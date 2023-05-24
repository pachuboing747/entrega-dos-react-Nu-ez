import { useState } from "react"





const ItemCount = ({stock, inicial, agregar}) =>{
    const[cantidad, setCantidad] = useState(inicial)

    const incrementar = () => {
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }
    const disminucion = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    return(
        <div className="contador">
            <div className="botones-contador">
                <button className="btn-count" onClick={disminucion}>-</button>
                <h4 className="numero-contador">{cantidad}</h4>
                <button className="btn-count" onClick={incrementar}>+</button>
            </div>
            <div className="btn-agregar-carrito">
                <button className="btn-agregar" onClick={()=>agregar(cantidad)} disabled={!stock}>
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
    
}
export default ItemCount