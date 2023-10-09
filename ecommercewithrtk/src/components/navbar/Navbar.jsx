import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <h1>Logo</h1>
      </div>
      <div className="nav-mid">
        <ul>
            <li>Home</li>
            <li>Trending</li>
            <li>Build Your Pc</li>
            <li>Accessories</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className="nav-right">
        
      </div>
    </nav>
  );
};

export default Navbar;
