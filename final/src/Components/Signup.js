import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Signup = () => {
  return (
    <div className="bg-warning vh-100 d-flex align-items-center ">
      <Container className="px-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="bg-white p-4 rounded shadow signup-form">
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                <Form.Group className="mb-3" controlId="fullname">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter your password" />
                </Form.Group>
                <Button variant="warning" block type="submit">
                  Sign Up
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
