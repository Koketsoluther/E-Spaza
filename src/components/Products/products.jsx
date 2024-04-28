import React from 'react';
import './products.css'; // Import the CSS file you created

const Products = () => {
    // Sample product data
    const productList = [
        { id: 1, name: 'Apple Watch Series 7 GPS', price: 599, image: '/public/logo192.png', rating: 5.0 },
        // Add more products as needed
    ];

    return (
        <div className="product-container">
            <div className="product-scroll">
                {productList.map((product) => (
                    <div key={product.id} className="product-card">
                        <a href=" ">
                            <img src={product.image} alt="product image" />
                        </a>
                        <div className="product-info">
                            <a href="/">
                                <h5>{product.name}</h5>
                            </a>
                            <div className="price">${product.price}</div>
                            <button className="btn-add-to-cart">Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
