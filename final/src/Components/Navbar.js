import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown} from 'react-bootstrap'; // Import Dropdown and other components
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
const NavBar = () => {
  const { isAuthenticated} = useAuth0();

  return (
    
    <>
      <Navbar expand="md" bg="white" variant="light" sticky="top" className="shadow">
        <div className="container">
          <Navbar.Brand>
            <h3>TastyTales</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
              <Nav.Link as={Link} to="/veg">Veg</Nav.Link>
              <Nav.Link as={Link} to="/nonveg">Nonveg</Nav.Link>
              <Nav.Link as={Link} to="/search">Search</Nav.Link>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} id="recipes-dropdown" className="nav-link">
                 More Options
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/add">Add your dishes</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/contact">Contact Us</Dropdown.Item>
                  {/* Add more dropdown items as needed */}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            {
            isAuthenticated?  <LogoutButton/>:<LoginButton/>
            }
          </Navbar.Collapse>
        </div>
        
      </Navbar>
    </>
  );
};

export default NavBar;
