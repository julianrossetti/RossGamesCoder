import { useParams } from "react-router-dom"
//import { useState, useEffect } from "react"
import Card from "../Card/Card";
import "./ItemList.css"
//import { getItems } from "../Mockproducts";

const ItemList = ({products}) => {
  const { categoryId } = useParams()
  const filteredItems = categoryId != "productos" ? products.filter(item => item.category === categoryId) : products
  return (
    <>
      <h2>Productos:</h2>
      <ul className="listUl">
        {filteredItems.map(item => (
          <li className="listItem" key={item.id}>
            <Card
              itemId={item.id}
              name={item.name}
              price={item.price}
              addToCart="Añadir al carrito"
              detail="detalles"
            />
          </li>
        ))
        }
      </ul>
    </>
  )
}

export default ItemList