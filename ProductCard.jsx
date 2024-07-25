import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
            <div className="font-bold">{product.name}</div>
            <div>Company: {product.company}</div>
            <div>Category: {product.category}</div>
            <div>Price: ${product.price}</div>
            <div>Rating: {product.rating}/5</div>
            <div>Discount: {product.discount}%</div>
            <div>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</div>
        </div>
    );
};

export default ProductCard;
