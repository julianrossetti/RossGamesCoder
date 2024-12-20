import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"
import CartCard from "./CartCard"

  const Cart = () => {
  const {cart} = useContext(CartContext)
  console.log(cart)
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
    </>
  )
}

export default Cart