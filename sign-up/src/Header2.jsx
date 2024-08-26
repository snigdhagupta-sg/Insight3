import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header2.css';

const Header2 = () => {
  return (
    <header className="header">
      <h1>AI Writing Assistant</h1>
      <nav className="nav-menu">
        <ul>
          <li className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <Link to="/contribute">Contribute</Link>
              <Link to="/home">Explore</Link> {/* Link to MainPage */}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header2;
