import { useState, useEffect } from "react"
import {getLista} from "../Lista/Lista"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({greeting}) =>{
    const [lista, setLista] = useState([])

    useEffect(() =>{
        getLista()
        .then(respuesta =>{
            setLista(respuesta)
        })
        .catch(error =>{
            console.error(error)
        })
    },[])


    return(
        <div>
            <h2>{greeting}</h2>
            <ItemList lista={lista}/>
        </div>
    )
}

export default ItemListContainer