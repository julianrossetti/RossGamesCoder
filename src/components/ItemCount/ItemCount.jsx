import {useState} from "react"
import "./ItemCount.css"


const ItemCount = ({quantity, setQuantity}) => {
    const Increment = () =>{
        setQuantity((counter) => counter + 1)
    }
    const Decrement = () =>{
        setQuantity((counter) => counter - 1)
    }
  return (
    <div className="counter">
    <button onClick={Increment}>+</button>
    <h2>{quantity}</h2>
    <button onClick={Decrement}>-</button>
    </div>
  )
}

export default ItemCount