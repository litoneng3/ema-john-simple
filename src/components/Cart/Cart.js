import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let total = 0;
    cart.map(crt => total = total + crt.price);

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = (total * .1).toFixed(2);
    const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);

    return (
        <div>
            <h4 className="text-primary">Order Summary</h4>
            <h5>Items Ordered: {cart.length}</h5>
            <h3>Product Price: ${total}</h3>
            <p><small>Tax + VAT : ${tax}</small></p>
            <p><small>shipping Cost: ${shipping}</small></p>
            <h3>Total Price: ${grandTotal}</h3>
            <Link to="/review"><button className="btn btn-warning">Review Order</button></Link>
        </div>
    );
};

export default Cart;