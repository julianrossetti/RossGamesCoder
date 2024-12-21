import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import CartCard from "./CartCard"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext)
  const total = getTotal(cart)
  if (cart.length == 0) {
    return <h1>El carrito está vacío</h1>
  }
  else {
    return (
      <>
        <h2>Productos en el carrito:</h2>
        <ul className="listUl">
          {cart.map(item => (
            <li className="listItem" key={item.id}>
              <CartCard
                id={item.id}
                img={item.img}
                name={item.name}
                price={item.price}
                cant={item.cant}
                detail="MÁS"
                remove="Remover Producto"
              />
            </li>
          ))
          }
        </ul>
        <div className="total">
          <h2>total: ${total}</h2>
          <button onClick={clearCart}>Limpiar Carrito</button>
          <button><Link to="/checkout">Ir a pagar</Link></button>
        </div>
      </>
    )
  }
}

export default Cart