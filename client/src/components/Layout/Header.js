import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import './Navbar.css'; // Custom CSS for more styling

const Header= () => {
  return (
    <Navbar expand="lg" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          <img
            src="https://via.placeholder.com/40"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />
          MyApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className="nav-link-custom">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something Else</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button  variant="outline-light" className="nav-btn-custom ms-3">
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
