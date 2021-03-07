import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const firstTen = fakeData.slice(0, 50);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);
    // console.log(firstTen);
    const handleAddProduct = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count);
    }
    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(pd => <Product key={pd.key} showAddToCart={true} handleAddProduct={handleAddProduct} product={pd}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;