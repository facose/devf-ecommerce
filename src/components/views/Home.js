import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar/Navbar';
import { Card } from '../Card';
const axios = require('axios');

export const Home = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get('https://ecomerce-master.herokuapp.com/api/v1/item')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const productsList = products.map((product) => {
        <li><Card props={product}/></li>
    });

    console.log(products)

    return (
        <>
            <Navbar />
            <ul>{productsList}</ul>
        </>
    )
}