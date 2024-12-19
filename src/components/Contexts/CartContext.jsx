import { createContext, useState } from "react";

export const CartContext = createContext();

import React from 'react'

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addItem = (item, quantity)=>{
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
    const removeItem = ()=>{}
    const clearCart = ()=>{}
    const getTotal = ()=>{}
    const totalQuantity = ()=>{}
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