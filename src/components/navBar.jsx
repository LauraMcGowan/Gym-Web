import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <a href="mailto:jpsgym@hotmail.co.uk">jpsgym@hotmail.co.uk</a>
      <br />
      <Link to="/Meet the Team">Meet the Team</Link>
      &nbsp;
      <Link to="/">Contact</Link>
      <Link to="/signUp">Sign up</Link>
      link all the pages here 
      &nbsp;
    </nav>
  );
}

export default Navbar;