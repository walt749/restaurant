import React from "react";
import "../Styles/Navbar.css";
import bagelphoto from "../Images/logo_tan.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav navbar-expand-lg navbar-light">
        <img src={bagelphoto} className="bagelIcon" alt="bagelphoto" />
        <Link to="/" className="navbar-brand">
          MUNCH BAGELS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="main-list">
            <button className="order-button">
              <Link className="nav-link">ORDER ONLINE</Link>
            </button>
            <ul class="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item order-link">
                <Link className="nav-link">
                  ORDER ONLINE<span class="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Account</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
