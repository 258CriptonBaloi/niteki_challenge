import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="cart">
      <h2>Lista de Favoritos</h2>
      {cartItems.length === 0 ? (
        <p>A lista de favoritos está vazia.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Preço: {item.price} MZN</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
