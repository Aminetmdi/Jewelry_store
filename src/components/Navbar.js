import React, { useState } from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };
  return (
    <header className="header">
      {/* RESPNSIVE NAV  */}
      <div className="mobile" onClick={clickHandler}>
        <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={clicked ? "listItem active" : "listItem"}>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>
          <li>
            <Link to="#">SEARCH</Link>
          </li>
          <li>
            <Link to="#">CART : 0</Link>
          </li>
        </ul>
      </div>
      <div className="sign">
        <ul>
          <li>
            <Link to="#">SIGN IN</Link>
          </li>
          <li>
            <Link to="#">SIGN UP</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
