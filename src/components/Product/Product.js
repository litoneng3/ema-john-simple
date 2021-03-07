import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.product.key);
    const { name, price, img, stock, seller, key } = props.product;
    // console.log(name, price);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h5 className="product-name"><Link to={"/product/"+key}>{name}</Link></h5>
                <br />
                <p><small>By: {seller}</small></p>
                <h3>${price}</h3>
                <p><small>only {stock} left in stock - order soon</small></p>

                {props.showAddToCart === true && <button onClick={() => props.handleAddProduct(props.product)} className="btn btn-warning"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>

        </div>
    );
};

export default Product;