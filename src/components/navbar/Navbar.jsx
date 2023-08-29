import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <a href="/" className="slide-title">
        <h1>ResearchZeal</h1>
      </a>
      <button
        className="toggle-button"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <FontAwesomeIcon
          icon="fa-solid fa-bars"
          size="lg"
          className="menu-icon"
        />
      </button>
      <ul className="menus" id={showMenu ? "hidden" : ""}>
        <li className="active-page">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="search-container">
        <input
          type="text"
          name=""
          id=""
          className="searchbar"
          placeholder="Search..."
        />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
