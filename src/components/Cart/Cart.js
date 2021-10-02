import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    console.log(props.children)
    // console.log(cart)
    let totalQuantity = 0
    let total = 0
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity

    }
    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10
    const grandTotal = total + shipping + tax
    return (
        <div>
            <h1>Order summary</h1>
            <h4>Items order:{totalQuantity}</h4>
            <p>total price:{total}</p>
            <p>shipping:{shipping}</p>
            <p>tax:{tax}</p>
            <p>grandTotal:{grandTotal}</p>
            {props.children}

        </div>
    );
};

export default Cart;