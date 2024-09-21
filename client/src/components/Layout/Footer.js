import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for the footer

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row>
          <Col md={4}>
            <h5>MyApp</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus pulvinar semper turpis.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@myapp.com</p>
            <p>Phone: +123 456 789</p>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} MyApp. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
