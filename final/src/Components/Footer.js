import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer bg-light text-light w-100 ">
        <hr></hr>
      <div className="container text-black shadow">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
          </div>
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Welcome to our recipe website! We are passionate about sharing delicious and easy-to-make recipes that you'll love. Our team of food enthusiasts is dedicated to bringing you the best culinary experiences.</p>
          </div>
          <div className="col-md-2">
            <h3>Follow Us</h3>
            <ul className="list-inline social-icons ">
              <li className="list-inline-item">
                <a href="#" target="_blank" rel="noopener noreferrer mx-2">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item mx-4">
                <a href="#" target="_blank" rel="noopener noreferrer ">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Your Recipe Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
