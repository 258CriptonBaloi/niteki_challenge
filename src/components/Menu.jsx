import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`menu ${menuOpen ? 'open' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? 'Fechar' : 'Menu'}
      </button>
      <ul className="menu-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Carinho</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
