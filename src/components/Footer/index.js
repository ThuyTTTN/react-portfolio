import React from "react";

//import bootstrap styles
import { Container, Row, Col }  from "react-bootstrap";


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
            <a href="https://github.com/ThuyTTTN" target="_blank" >
              <i className="fa-brands fa-github icon"></i>
            </a>&nbsp;
            <a href="https://www.linkedin.com/in/thuy-nguyen-a2333031" target="_blank">
              <i className="fa-brands fa-linkedin icon"></i>
            </a>&nbsp;
            <a href="https://www.instagram.com/thuytttn" target="_blank" >
              <i className="fa-brands fa-instagram icon"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
