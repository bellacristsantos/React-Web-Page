import React from 'react';
import styles from '/styles/header.module.css';

const Header = () => (
  <header>
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <img src="../assets/logo.svg" alt="logo" />
        </div>
        <div className="header-text">
          <h1>Alex Smith</h1>
        </div>
      </div>
      <nav>
        <div className="header-nav">
          <ul>
            <a className="nav-title" href="./home.html">
              Home
            </a>
            <a className="nav-title" href="./work.html">
              Work
            </a>
            <a className="nav-title" href="./contact.html">
              Contact
            </a>
          </ul>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
