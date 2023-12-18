// ProductDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CartContext from './CartContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const products = [
    { id: 1, name: 'Leo Food & Grills', title: '***Menu***', description: 'Sandes-60MZN || File de porco-160MZN || Hamburguer-600MZN || Refeicao-100MZN', image: '../images/food1.jpg' },
    { id: 2, name: 'Maria Food & Grills', title: '***Menu***', description: 'Sandes-60MZN || File de porco-160MZN || Hamburguer-600MZN || Refeicao-100MZN', image: '../images/food2.jpg' },
    { id: 3, name: 'Jimmy Food & Grills', title:'***Menu***', description: 'Sandes-60MZN || File de porco-160MZN || Hamburguer-600MZN || Refeicao-100MZN', image: '../images/food3.jpg' },
    { id: 4, name: 'Teresa Food & Grills', title:'***Menu***', description: 'Sandes-60MZN || File de porco-160MZN || Hamburguer-600MZN || Refeicao-100MZN', image: '../images/food4.jpg' },
    { id: 5, name: 'Vinhos & Carnes', title:'***Menu***', description: 'Sandes-60MZN || File de porco-160MZN || Hamburguer-600MZN || Refeicao-100MZN', image: '../images/food5.jpg' },
    { id: 6, name: 'Acer Food & Grills', title:'***Menu***', description: 'Sandes-60MZN || File de porco-160MZN || Hamburguer-600MZN || Refeicao-100MZN', image: '../images/food6.jpg' },
  ];

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Adicionar Menu aos Favoritos</button>
    </div>
  );
};

export default ProductDetails;
