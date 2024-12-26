import { useContext, useState } from "react"
import "./CheckOut.css"
import { CartContext } from "../Contexts/CartContext"
import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"

const CheckOut = () => {

  const [person, setPerson] = useState({
    name: "",
    lastname: "",
    phoneNumber: "",
    addres: "",
    email: ""
  })

  const [orderCreated, setOrderCreated] = useState(false)

  const { cart, getTotal, totalQuantity, clearCart}= useContext(CartContext)
  
  const total = getTotal(cart)
  
  const quantity = totalQuantity(cart)

  const CreateOrder = async ()=>{
    try{
    const ObjOrder = {
      buyer: {      
        name: person.name,
        lastname: person.lastname,
        phoneNumber: person.phoneNumber,
        addres: person.addres,
        email: person.email
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
    return <h1>La orden fue creada correctamente</h1>
  }

  const handleChange = (e)=>{
    e.preventDefault()
    const {name, value} = e.target
    setPerson((prevPerson)=>({
      ...prevPerson, [name]: value,
    }))
  }
  return (
    <div className="checkoutForm">
      <form action="submit">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" onChange={handleChange} value={person.name} placeholder="Name" required/>
        <label htmlFor="name">Apellido</label>
        <input type="text" name="lastname" onChange={handleChange} value={person.lastname} placeholder="lastname" required/>
        <label htmlFor="phoneNumber">Número telefónico</label>
        <input type="number" name="phoneNumber" onChange={handleChange} value={person.phoneNumber} placeholder="Phone number" required/>
        <label htmlFor="addres">Dirección</label>
        <input type="text" onChange={handleChange} name="addres" value={person.addres} placeholder="Addres" required/>
        <label htmlFor="email">email</label>
        <input type="email" onChange={handleChange} name="email" value={person.email} placeholder="Email" required/>
      </form>
      <button onClick={CreateOrder}>Generar orden de compra</button>
    </div>
  )
}

export default CheckOut