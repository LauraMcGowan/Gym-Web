import React from "react";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div>
          <img src={logo} alt="img" />
          <br />
          <ul>
              <li>
                  {/* Endpoint to route to Home component */}
                  <Link to="/">Home</Link>
              </li>
              <li>
                  {/* Endpoint to route to About component */}
                  <Link to="/meettheteam">Meet The Team</Link>
              </li>
              <li>
                  {/* Endpoint to route to Contact Us component */}
                  <Link to="/contactus">Contact Us</Link>
              </li>
          </ul>
      </div>
  );
     

};

export default Home;

