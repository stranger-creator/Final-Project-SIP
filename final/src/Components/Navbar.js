import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap'; // Import Navbar and other components

import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <Navbar expand="md" bg="white" variant="light" sticky="top" className="shadow">
        <div className="container">
          <Navbar.Brand>
            <h3>NAME</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            </Nav>
            <Button as={Link} to="/login" variant="brand" className="mx-3">Login</Button>
            <Button as={Link} to="/signup" variant="brand">Signup</Button>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
