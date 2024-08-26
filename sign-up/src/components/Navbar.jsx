import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">NewsPortal</a>
      </div>
      <div className="navbar-sign-out">
        <a href="/sign out">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
