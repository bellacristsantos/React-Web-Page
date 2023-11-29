import React from 'react';
import styles from '/styles/footer.module.css';

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="footer-icons">
        <a href="#">
          <i className="ph-thin ph-instagram-logo"></i>
        </a>
        <a href="#">
          <i className="ph-thin ph-youtube-logo"></i>
        </a>
      </div>
      <div className="footer-text">
        <p> Made by Isabella Santos - 2023</p>
      </div>
    </div>
  </footer>
);

export default Footer;
