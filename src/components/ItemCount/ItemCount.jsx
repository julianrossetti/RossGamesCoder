import {useState} from "react"


const ItemCount = () => {
    const [counter, setCounter] = useState(0)
    const Increment = () =>{
        setCounter((counter) => counter + 1)
    }
    const Decrement = () =>{
        setCounter((counter) => counter - 1)
    }
  return (
    <>
    <button onClick={Increment}>+</button>
    <h2>{counter}</h2>
    <button onClick={Decrement}>-</button>
    </>
  )
}

export default ItemCount