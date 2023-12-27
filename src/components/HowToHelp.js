import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HowToHelp = () => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Row>
        <Col className="text-center">
          <h1>How to Help</h1>
          <p className="mt-3">
            Find out how you can contribute to our cause and make a difference.
          </p>
          <div className="mt-4">
            <Link to="/" className="btn btn-primary btn-lg m-2">Home Page</Link>
            <Link to="/about-us" className="btn btn-secondary btn-lg m-2">About Us</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HowToHelp;

