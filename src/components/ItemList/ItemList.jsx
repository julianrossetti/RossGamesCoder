import Card from "../Card/Card";
import "./ItemList.css"
import {Link} from "react-router-dom"

const ItemList = ({products}) => {
  return (
    <>
      <h2>Productos:</h2>
      <ul className="listUl">
        {products.map(item => (
          <li className="listItem" key={item.id}>
            <Card
              img={item.img}
              itemId={item.id}
              name={item.name}
              price={item.price}
              addToCart="Añadir al carrito"
              detail="MÁS"
            />
          </li>
        ))
        }
      </ul>
    </>
  )
}

export default ItemList