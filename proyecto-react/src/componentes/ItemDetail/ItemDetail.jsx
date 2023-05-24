import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({item}) =>{
    return(
        <div className="item-detail">
            <img className="img-item-detail" src={item.img} alt={item.nombre}/>
            <div>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <p>$ {item.precio}</p>
                <p>Stock: {item.stock}</p>
                
                <ItemCount inicial ={1} stock={item.stock} agregar={(cantidad) => console.log("cantidad Agregada", cantidad)}/>
            </div>
        </div>
    )
}

export default ItemDetail