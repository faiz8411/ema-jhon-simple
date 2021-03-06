import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock, star } = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>by:{seller}</small></p>
                <p>price:{price}</p>
                <p><small>only {stock} left in stock- order soon</small></p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                <br />
                <button
                    onClick={() => props.handeAddToCart(props.product)}
                    className="purcahse-regular"
                >{cartIcon}Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;