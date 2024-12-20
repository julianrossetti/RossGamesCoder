import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useParams } from "react-router-dom"
import { useState, useEffect, useCallback } from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartContext";


const ItemDetail = () => {
  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState()
  const handleQuantity = (cant)=>{
    setQuantity(cant)
  }
  useEffect(() => {
    const collectionRef = collection(db, "products")
    getDocs(collectionRef)
      .then((querySnapshot)=>{
        const items = querySnapshot.docs.map((doc)=>{
          return {id: doc.id, ...doc.data()}
        })
        setProducts(items)
      })
      }, [])
    const handleAdd = (item)=>{
      const obj = {id: item.id, img: item.img, price: item.price, name: item.name, stock: item.stock, cant: quantity}
      addItem(obj)
    }
    const { addItem, cart } = useContext(CartContext)
    const { itemId } = useParams()
    const item = products.find(item => item.id == itemId)
    if (!item) {
      return <p>Cargando detalles del producto...</p>;
    }
    return (
      <>
        <div key={item.id} className="product-details">
          <div className="divImg">
            <img  className="imagen" src={item.img} alt="" />
          </div>
          <div className="desc">
            <h2>{item.name}</h2>
            <p><strong>{item.price}</strong></p>
            <p><strong>{item.description}</strong></p>
            <p><strong>Stock: {item.stock}</strong></p>
            <button className="add-to-cart-button" onClick={() => handleAdd(item)}>Añadir al carrito</button>
            <ItemCount stock={item.stock} cantidad={handleQuantity}/>
          </div>
        </div>
      </>
    )
  }

export default ItemDetail