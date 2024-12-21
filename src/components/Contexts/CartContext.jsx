import { createContext, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const addItem = (item)=>{
    setCart((prevCart)=>{
      const isInCart = prevCart.some((itemCart)=> itemCart.id === item.id)
      if (isInCart){
        Toastify({
          text: "Ya se encuentra en el carrito",
          position: "left",
          duration: 3000,
          style: {background: "red"}
        }).showToast();
        return prevCart
      }else{
        Toastify({
          text: "✔️",
          duration: 2000
        }).showToast();
      }
      return [...prevCart, item]
    })
  }
  const removeItem = (productId)=>{
    setCart((prevCart)=> prevCart.filter(producto => producto.id != productId))
  }
  const clearCart = ()=>{
    setCart([])
  }
  const getTotal = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.cant * item.price, 0);
    return total;
    }
  const totalQuantity = (cart)=>{
    return cart.reduce((total, producto) => total + producto.cant, 0)

  }
    const funciones = {
        addItem,
        removeItem,
        clearCart,
        getTotal,
        totalQuantity,
        cart
    }
  return (
    <>
    <CartContext.Provider value={funciones}>
        {children}
    </CartContext.Provider>
    </>
  )
}