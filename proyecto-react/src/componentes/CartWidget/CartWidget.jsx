import image from "./image/carro.svg"




const  CartWidget = () => {
    return (
        <div className="carrito">
            <img className="cart" src={image} alt="carro"/>
            <p className="carrito-numero">0</p>
    
        </div>
    )
}

export default CartWidget