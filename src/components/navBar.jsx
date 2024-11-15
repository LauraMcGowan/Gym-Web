import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import NavBar from "../styling/navbar.css"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  return (
    <nav className="navbar">
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
      <Link to="/home">Home</Link>
        <Link to="/meet-the-team">Meet the Team</Link>
        <Link to="/memberships">Memberships</Link>
        <Link to="/classes">Classes</Link>
        <Link to="/injury-rehab">Injury/Rehab</Link>
        <Link to="/shop">Shop</Link>
      </ul>
    </nav>
  );
};

export default Navbar;

