import { useContext, useState } from "react"
import { CartContext } from "../Contexts/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"

const CheckOut = () => {

  const [orderCreated, setOrderCreated] = useState(false)

  const { cart, getTotal, totalQuantity, clearCart}= useContext(CartContext)
  
  const total = getTotal(cart)
  
  const quantity = totalQuantity(cart)

  const CreateOrder = async ()=>{
    try{
    const ObjOrder = {
      buyer: {      
        name: "Pepe",
        lastname: "Mujica",
        phoneNumber: 123456,
        addres: "Calle falsa 123",
        email: "pepe@gmail.com"
      },
      items: cart,
      total,
      quantity,
      date: new Date()
      }

      const ids = cart.map((item)=>item.id)
      const productsRef = collection(db, "products")
      const addedFromFs = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      )
      const {docs} = addedFromFs
      const outOfStock = []
      const batch = writeBatch(db)

      docs.forEach((doc)=>{
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
        const prodAddedToCart = cart.find((item)=>{item.id === doc.id})
        console.log(prodAddedToCart)
        const prodQuantity = cart.map((item)=>item.cant)

        if(stockDb>=prodQuantity){
          batch.update(doc.ref, {stock: stockDb - prodQuantity})
        }else{
          outOfStock.push({id: doc.id, ...dataDoc})
        }

      }
    )
    if(outOfStock.length === 0){
      await batch.commit()
      const orderRef = collection(db, "orders")
      const orderAdded = await addDoc(orderRef, ObjOrder)
      console.log(`el id de su compra es ${orderAdded.id}`)
      clearCart()
      setOrderCreated(true)}else{
        console.log("hay productos fuera de stock")
      }
    }catch(error){
      console.log(error)
    }
  }

  if (orderCreated){
    <h1>La orden fue creada correctamente</h1>
  }
  return (
    <>
      <button onClick={CreateOrder}>Generar orden de compra</button>
    </>
  )
}

export default CheckOut