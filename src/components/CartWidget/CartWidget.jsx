import "./Cart.Widget.css"
import carro from "../img/carrito.png"

function CartWidget(){
    return (
        <>
        <img className="carro" src={carro} alt="" />
        <span>1</span>
        </>
    )
}

export default CartWidget