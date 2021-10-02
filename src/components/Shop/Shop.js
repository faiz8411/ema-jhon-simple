import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])
    // const [displayProduct, setDisplayProduct] = useState([])
    useEffect(() => {
        // console.log('product called api')
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProduct(data)
                // console.log('product recieve');
            })
    }, []);
    useEffect(() => {
        // console.log('local storage called')
        if (products.length) {
            const savedCart = getStoredCart()
            const storedCart = []
            for (const key in savedCart) {
                console.log(key)
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {

                    const quantyity = savedCart[key]
                    addedProduct.quantyity = quantyity
                    // console.log(addedProduct)
                    storedCart.push(addedProduct)
                }


            }
            setCart(storedCart)
        }
    }, [products])
    const handeAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        // save to localstorage
        addToDb(product.key)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProduct(matchedProduct)
        console.log(matchedProduct.length)
    }
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="saerch" />
            </div>
            <div className="shop-container">
                <div className="product-container">

                    {
                        displayProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handeAddToCart={handeAddToCart}>

                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/review">
                            <button className="purcahse-regular">review order</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;