import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key, img } = props.product
    const { handleRemove } = props
    return (
        <div className="product">
            <img src={img} alt="" />
            <div>
                <h4 className="product-name">{name}</h4>
                <p>price:{price}</p>
                <p>quantity:{quantity}</p>
                <button onClick={() => handleRemove(key)} className="purcahse-regular">remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;