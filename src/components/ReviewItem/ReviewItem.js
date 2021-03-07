import React from 'react';
import Product from '../Product/Product';

const ReviewItem = (props) => {
    const { name, quantity } = props.product;
    // console.log(product);
    const style ={
        borderBottom: '1px solid lightgray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft:'200px'
    }
    return (
        <div style={style}>
            <h6 className="product-name">{name}</h6>
            <h4>Quantity: {quantity}</h4>
            <br/>
            <button className="btn btn-warning">Remove item</button>
        </div>
    );
};

export default ReviewItem;