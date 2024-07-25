import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { fetchTopProducts } from '../api/api';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchTopProducts('AMZ', 'Laptop', 10, 1, 10000);
            setProducts(data.products);
        };
        fetchData();
    }, []);

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold my-4">All Products</h1>
            <ProductList products={products} />
        </div>
    );
};

export default AllProductsPage;
