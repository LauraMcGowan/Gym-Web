import React, { useState } from 'react';
// import './navBar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
         <a href="/">Home</a>
         <a href="/meet the team">Meet the Team</a> 
         <a href="/memberships">Memberships</a> 
         <a href="/signup">Sign Up</a> 
         <a href="/injury/rehab">injury/rehab</a> 
        <a href="/jamin dance academy">Jamin dance academy</a>
        <a href="/shop">Shop</a>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
