import React from "react";
import { Row, Image, Container } from "react-bootstrap";
import ThuyImg from "../../assets/Thuy-img-PhotoRoom.png";

function About() {
  return (
    <section className="about-me" id="about">
      <Container>
        <Row className="about-container">
          <h1 className="title" >
            About Me
          </h1>
          <div className="d-flex justify-content-around">
            <div sm={12} md={6} lg={4} className="p-2 ">
              <Image src={ThuyImg} roundedCircle width="180vw" height="280vw" />
            </div>
            <div className="p-3">
              <p classname="about-text">
                I'm a Full Stack Web Developer and a mother of 2.  I have experience in JavaScript, CSS, HTML, Bootstrap, MySQL, React, Node.js, Express.js, MongoDB, Apollo GraphQL, and GIT/Github.  I love learning new programming languages and building applications.  In addition to software development, I have a broad interest in healthcare.   When I'm not coding, I enjoy making memories with my family, going to the beach, and traveling.   I look forward to working with you in the near future.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default About;
