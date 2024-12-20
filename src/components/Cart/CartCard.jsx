import {Link} from "react-router-dom"


const CartCard = ({id, name, price, img, itemId, description, detail, remove, cant}) => {
    return (
            <div className="card">
                <div className="card-body">
                    <img className="img" src= {img} alt="" />
                    <div>
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">${price}</h6>
                        <p>{description}</p>
                        <p>Cantidad: {cant}</p>
                        <Link to = {`/productos/${id}`}><button>{detail}</button></Link>
                        <button>{remove}</button>
                    </div>
                </div>
            </div>
    )
}

export default CartCard