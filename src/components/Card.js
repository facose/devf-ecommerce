import React from 'react';

export const Card = (props) => {
    const {product_name: productName, description: description, price: price, image:image} = props;

    return (
        <div className="card" style="width: 18rem;">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
        </div>
    )
}