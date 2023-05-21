import ItemDetail from "../ItemDetail/ItemDetail"

const ItemList = ({lista}) =>{
    return(
        <div>
            {lista.map( list => <ItemDetail key={list.id}{...list}/>)}
        </div>
    )
}

export default ItemList 