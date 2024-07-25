import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data); // Assuming data is an array of products
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts();
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        {/* Add more product details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
