// ProductList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';
import './ProductList.css';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Iphone 12 Pro Max', price: 60, description: 'Adira já aos nossos produtos de qualidade', image: './images/iphone.webp' },
    { id: 2, name: 'Bundle c 1 Jogo (Fifa 2022)', price: 65, description: 'Adira já aos nossos produtos de qualidade', image: './images/ps5.webp' },
    { id: 3, name: 'HP Laserjet Printer 612DN', price: 89, description: 'Adira já aos nossos produtos de qualidade', image: './images/impressora.webp' },
    { id: 4, name: 'Headset Pulse 3D black', price: 9, description: 'Adira já aos nossos produtos de qualidade', image: './images/headphones.webp' },
    { id: 5, name: 'Apple Tv 4k 64gb 2021', price: 19, description: 'Adira já aos nossos produtos de qualidade', image: './images/apple-tv.webp' },
    { id: 6, name: 'Acer Aspire 3 i3-1005G1', price: 44, description: 'Adira já aos nossos produtos de qualidade', image: './images/acer.webp' },
  ];

  return (
    <div className="product-list">
      <h2>Lista de Produtos</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Preço: {product.price} MZN</p>
              <p>{product.description}</p>
            </Link>
            <button onClick={() => addToCart(product)}>
              Adicionar ao Carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
