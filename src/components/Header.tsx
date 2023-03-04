import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Daiki.com</h3>
      </div>

      <nav>
        <ul>
          <li className="first">
            <a href="/">HOME</a>
          </li>
          <li>
            <Link to="/blog">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">SNS</Link>
          </li>
          
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
