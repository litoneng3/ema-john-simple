import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
    const { name, price, img, stock, seller } = props.product;
    // console.log(name, price);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br/>
                <p><small>By: {seller}</small></p>
                <h3>${price}</h3>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handleAddProduct(props.product)} className="cart-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>

        </div>
    );
};

export default Product;