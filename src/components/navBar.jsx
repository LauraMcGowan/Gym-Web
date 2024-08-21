import React, { useState } from 'react';


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
        <a href="/about">About</a>
        <a href="/meet-the-team">Meet the Team</a>
        <a href="/memberships">Memberships</a>
        <a href="/signup">Sign Up</a>
        <a href="/injury-rehab">Injury/Rehab</a>
        <a href="/jamin-dance-academy">Jamin Dance Academy</a>
        <a href="/shop">Shop</a>
      </ul>
    </nav>
  );
};

export default Navbar;
