import {getItems} from "../Mockproducts"
import {useParams } from "react-router-dom"
import {useState, useEffect } from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";


const ItemDetail = () => {
  const [quantity, setQuantity] = useState(1);
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
    if (!item) {
      return <p>Cargando detalles del producto...</p>;
    }
  return (
    <>
    <div key={item.id} className="product-details">
      <div>
        <img src={item.img} alt="" />
      </div>
      <div className="desc">
        <h2>{item.name}</h2>
        <p><strong>{item.price}</strong></p>
        <p><strong>{item.description}</strong></p>
        <button className="add-to-cart-button" onClick={()=>addItem(item, quantity)}>Añadir al carrito</button>
        <ItemCount quantity={quantity} setQuantity={setQuantity}/>  
      </div>
    </div>
    </>
  )
}

export default ItemDetail