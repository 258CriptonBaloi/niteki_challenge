import React from 'react';
import './ProductList.css';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Iphone', price: 10, description: 'Description 1', image: './images/iphone.webp' },
    { id: 2, name: 'Iphone', price: 20, description: 'Description 2', image: './images/ps5.webp' },
    { id: 3, name: 'Iphone', price: 30, description: 'Description 3', image: './images/impressora.webp' },
    { id: 4, name: 'Iphone', price: 40, description: 'Description 4', image: './images/headphones.webp' },
    { id: 5, name: 'Iphone', price: 50, description: 'Description 5', image: './images/apple-tv.webp' },
    { id: 6, name: 'Iphone', price: 60, description: 'Description 6', image: './images/acer.webp' },
  ];

  return (
    <div className="product-list">
      <h2>Lista de Produtos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

