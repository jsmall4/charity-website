// LandingPage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/videos/background.mp4'; // Adjust the path as needed
import './LandingPage.css'; // Make sure this path is correct too

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video autoPlay loop muted className="background-video" id="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container fluid className="min-vh-100 d-flex flex-column justify-content-center align-items-center overlay-content">
        <Row>
          <Col className="text-center">
            <h1>Welcome to Our Charity</h1>
            <p className="lead">Making a difference in the lives of others</p>
            <div className="mt-4">
              <Link to="/about-us" className="btn btn-primary btn-lg m-2">About Us</Link>
              <Link to="/how-to-help" className="btn btn-secondary btn-lg m-2">How to Help</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;

