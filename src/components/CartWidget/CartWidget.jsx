import "./Cart.Widget.css"
import {Link} from "react-router-dom"
import carro from "../../assets/img/carrito.png"

function CartWidget(){
    return (
        <>
        <Link to="/carrito"><img className="carro" src={carro} alt="" /></Link>
        </>
    )
}

export default CartWidget