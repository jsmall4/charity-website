import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Row>
        <Col className="text-center">
          <h1>About Us</h1>
          <p className="mt-3">
            Learn more about our mission, values, and the ways we're making a difference.
          </p>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary btn-lg m-2">Home Page</Link>
            <Link to="/how-to-help" className="btn btn-secondary btn-lg m-2">How to Help</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;

