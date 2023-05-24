import Item from "../Item/Item"
import {CapitalLetter} from "../CapitalLetter/CapitalLetter"

const ItemList = ({lista, titulo}) =>{
    
    return(
        <div className="container-list">
            <h2 className="capital-letter">{CapitalLetter(titulo)}</h2>
            <div className="item-list">
            {lista.map((list )=> <Item lista = {list} key={list.id}/>)}
            </div>
        </div>
    )
}

export default ItemList 