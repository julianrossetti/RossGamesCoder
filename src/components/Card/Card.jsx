import React from 'react'

const Card = ({name, price, addToCart, detail}) => {
    return (
        <>
            <div className="card" style="width: 18rem;">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{price}</h6>
                    <a href="#" className="card-link">{addToCart}</a>
                    <a href="#" className="card-link">{detail}</a>
                </div>
            </div>
        </>
    )
}

export default Card