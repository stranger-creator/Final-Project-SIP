import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.css'; // Import the CSS module

const Footer = () => {
  return (
    <footer className={`${styles.footer} shadow-lg mt-3`}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum mauris eget libero luctus,
              sit amet maximus risus lacinia.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Contact Information</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faInstagram} />{' '}
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faFacebook} />{' '}
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon="map-marker-alt" /> 1234 Main St, City, Country
              </li>
              <li>
                <FontAwesomeIcon icon="phone" /> +1 (123) 456-7890
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Food App Details</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum mauris eget libero luctus,
              sit amet maximus risus lacinia.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        &copy; {new Date().getFullYear()} Your Website Name
      </div>
    </footer>
  );
};

export default Footer;
