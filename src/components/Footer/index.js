import React from "react";

//import bootstrap styles
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="main-footer p-3">
      <Container>
        <Row>
          <Col sm={12} md={6} className="m-md-0">
            <p className="m-md-0 copyright">&copy; 2022 Thuy Nguyen</p>
          </Col>
          <Col
            sm={12}
            md={6}
            className="d-flex justify-content-md-end justify-content-center"
          >
            <a href="https://github.com/ThuyTTTN" >
              <i className="fa-brands fa-github"></i>
            </a>&nbsp;
            <a href="www.linkedin.com/in/thuy-nguyen-a2333031" >
              <i className="fa-brands fa-linkedin"></i>
            </a>&nbsp;
            <a href="/" >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
