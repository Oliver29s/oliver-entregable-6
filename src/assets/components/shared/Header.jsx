import React from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";

const Header = () => {
  return (
    <header >
      <div className="home__header">

      <h1>
        {" "}
        <Link className="home__h1" to="/">
          E-comerce
        </Link>
      </h1>
      <nav className="home__nav">
        <ul>
          <li>
            <Link to="/user/login">
              Login
              <i className="bx bxs-user"></i>
            </Link>{" "}
          </li>
          <li>
            <Link to="/">
              Purchases
              <i className="bx bxs-box"></i>
            </Link>
          </li>
          <li>
            <Link to="/cart">Cart  <i className='bx bxs-cart-download'></i></Link>
           
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
