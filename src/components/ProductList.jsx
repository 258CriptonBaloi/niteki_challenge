// ProductList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';
import './ProductList.css';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Leo Food & Grills', price: 60, description: 'Visite-nos! 84-000-0000', image: './images/res6.jpg' },
    { id: 2, name: 'Maria Food & Grills', price: 65, description: 'Visite-nos! 84-000-0000', image: './images/res2.jpg' },
    { id: 3, name: 'Jimmy Food & Grills', price: 89, description: 'Visite-nos! 84-000-0000', image: './images/res3.jpg' },
    { id: 4, name: 'Teresa Food & Grills', price: 9, description: 'Visite-nos! 84-000-0000', image: './images/res4.jpg' },
    { id: 5, name: 'Vinhos & Carnes', price: 19, description: 'Visite-nos! 84-000-0000', image: './images/res5.jpg' },
    { id: 6, name: 'Acer Food & Grills', price: 44, description: 'Visite-nos! 84-000-0000', image: './images/res6.jpg' },
  ];

  return (
    <div className="product-list">
      <h2>Lista de Restaurantes</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className='links'>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Pratos a partir de: {product.price} MZN</p>
              <p>{product.description}</p>
            </Link>
            <button onClick={() => addToCart(product)}>
              Adicionar aos favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
