import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap'; // Import Dropdown and other components

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
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} id="recipes-dropdown" className="nav-link">
                  Dropdown
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/veg">Veg</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/nonveg">Nonveg</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/add">add</Dropdown.Item>
                  {/* Add more dropdown items as needed */}
                </Dropdown.Menu>
              </Dropdown>
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
