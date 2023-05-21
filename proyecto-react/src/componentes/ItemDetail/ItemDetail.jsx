
import { useParams } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetailContainer =({id, nombre, img, precio, stock , descripcion}) =>{
    const params = useParams();
    console.log(params);

    return(
    <article>
        <header>
            <h2>
                
                {nombre}
            </h2>
        </header>
        <picture>
            <p>
                <img src={img} alt={nombre} />
            </p>
        </picture>
        <section>
            <p>
                Descripcion:{descripcion}
            </p>
            <p>
                stock:{stock}
            </p>
            <p>
                precio: ${precio}
            </p>
           
        </section>
        <footer>
           <ItemCount inicial={1} stock={stock} agregar={cantidad =>console.log("cantida Agregada", cantidad)}/>
        </footer>
        
    </article>

    )
}

export default ItemDetailContainer