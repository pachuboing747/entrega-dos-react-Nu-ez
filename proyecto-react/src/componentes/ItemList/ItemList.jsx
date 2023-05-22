import Item from "../Item/Item"
// import {CapitalLetter} from "../CapitalLetter/CapitalLetter"

const ItemList = ({lista, titulo}) =>{
    
    return(
        <div>
            {/* <h2>{CapitalLetter(titulo)}</h2> */}
            <h2>{titulo}</h2>
            <div>
            {lista.map((list )=> <Item lista = {list} key={list.id}/>)}
            </div>
        </div>
    )
}

export default ItemList 