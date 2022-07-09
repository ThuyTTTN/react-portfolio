import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import ThuyImg from "../../assets/Thuy-img-PhotoRoom.png";

function About() {
  return (
    <section className="about-me">
      <Container>
      <Row className="about-container">
        <h1 id="about" className="title" style={{ textAlign: "center" }}>
          About Me
        </h1>
        <Col sm={12} md={6} lg={4} className="justify-content-center">
          <Image src={ThuyImg} roundedCircle width="180vw" height="280vw" />
        </Col>
      </Row>
        <p classname="about-text">I'm a full stack developer student at the University of Central Florida
        Bootcamp. As a UCF alumni, I received my B.S. in Biology, then further
        my education with a Doctor of Chirpractic degree from Palmer College of
        Chiropractic. I enjoy helping people and learning about technology. In
        my free time, I love spending time with my family, going to the beach,
        fishing, and traveling. I look forward to working with you in the near
        future.
        </p>
        </Container>
    </section>
  );
}

export default About;