import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/home">INSIGHT</a>
      </div>
      <div className="navbar-menu">
        <button className="menu-button" onClick={toggleMenu}>Menu</button>
        <ul className={`menu-dropdown ${showMenu ? 'show' : ''}`}>
          <li><a href="/login">LogOut</a></li>
          <li><a href="/ai-assistant-writing">AI Assistant Writing</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
