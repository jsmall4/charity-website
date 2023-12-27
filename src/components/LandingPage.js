import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <Row>
        <Col className="text-center">
          <h1 className="display-1" style={{ fontFamily: "'CoolFont', sans-serif", fontSize: "4rem" }}>
            Charity Website
          </h1>
          <div className="mt-4">
            <Link to="/about-us" className="btn btn-primary btn-lg m-2">About Us</Link>
            <Link to="/how-to-help" className="btn btn-secondary btn-lg m-2">How to Help</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
