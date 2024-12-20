import {useEffect, useState} from "react"
import "./ItemCount.css"


const ItemCount = ({stock, cantidad}) => {
  const [quantity, setQuantity] = useState(1)
  useEffect(()=>{cantidad(quantity)},[cantidad, quantity])
    const handleCant = ()=>{
      cantidad(quantity)
    }
    const Increment = () =>{
      if(quantity<stock){
        setQuantity((counter) => counter + 1)
      }
    }
    const Decrement = () =>{
      if(quantity>1){
        setQuantity((counter) => counter - 1)
      }
    }
  return (
    <div className="counter">
    <button onClick={()=>{Increment();handleCant()}}>+</button>
    <h2>{quantity}</h2>
    <button onClick={()=>{Decrement();handleCant()}}>-</button>
    </div>
  )
}

export default ItemCount