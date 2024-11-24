import "./Card.css"
import {Link} from "react-router-dom"

const Card = ({name, price, addToCart, itemId, description, detail}) => {
    //console.log(itemId)
    return (
            <div className="card">
                <div className="card-body">
                    <h4>{itemId}</h4>
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{price}</h6>
                    <p>{description}</p>
                    <button><a href="#" className="card-link">{addToCart}</a></button>
                    <Link to = {`/productos/${itemId}`}><button>{detail}</button></Link>
                </div>
            </div>
    )
}

export default Card