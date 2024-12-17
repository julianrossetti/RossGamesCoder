import {getItems} from "../Mockproducts"
import {useParams } from "react-router-dom"
import {useState, useEffect } from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";


const ItemDetail = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    getItems()
      .then((data)=>{
        setProducts(data)
      })
  },[])
  const {addItem, cart} = useContext(CartContext)
  const { itemId } = useParams()
  const item = products.find(item => item.id === parseInt(itemId))
  console.log(cart)
  if (!item) {
    return <p>Cargando detalles del producto...</p>;
  }
  return (
    <>
    <div key={item.id} className="product-details">
      <p className="product-id">{item.id}</p>
      <h2>{item.name}</h2>
      <p><strong>{item.price}</strong></p>
      <p><strong>{item.description}</strong></p>
      <button className="add-to-cart-button" onClick={()=>addItem(item)}>Añadir al carrito</button>
    </div>
    <ItemCount/>
    </>
  )
}

export default ItemDetail