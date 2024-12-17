import "./Cart.Widget.css"
import carro from "../img/carrito.png"
import {Link} from "react-router-dom"

function CartWidget(){
    return (
        <>
        <Link to="/carrito"><img className="carro" src={carro} alt="" /></Link>
        </>
    )
}

export default CartWidget