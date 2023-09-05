import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <Container>
        <h1 className="text-center mb-4">Contact Us</h1>
        <Row>
          <Col md={4} className="mb-4">
            <div className="contact-item">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info">
                <h4>Email</h4>
                <p>contact@example.com</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="contact-item">
              <div className="icon " >
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="info">
                <h4>Phone</h4>
                <p>+1 (123) 456-7890</p>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="contact-item">
              <div className="icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="info">
                <h4>Address</h4>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
