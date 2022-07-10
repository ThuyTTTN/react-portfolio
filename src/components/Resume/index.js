import React from "react";

//import react-bootstrap
import { Button, Container, Card, Row } from "react-bootstrap";

function Resume() {
  return (
    <section id="resume">
      <Container>
        <Row className="resume-section d-flex align-items-center flex-column">
          <h1 className="title">Technical Skills and Experience</h1>
          <div className="resume-btn">
            <Button
              href="https://1drv.ms/b/s!Aka643mjyMAQpFdoHmkmERgX8IBb?e=EGgqeh"
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              className=""
            >
              Click for my Resume
            </Button>
          </div>
        </Row>
        <div className="d-flex justify-content-around">
          <Card className="card-box">
          <Card.Header>Frontend</Card.Header>
            <Card.Body>           
                <ul>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                </ul>
            </Card.Body>
          </Card>
          <Card className="card-box">
          <Card.Header>Backend</Card.Header>
            <Card.Body>
              <ul>
                <li>NoSQL</li>
                <li>APIs</li>
                <li>REST</li>
                <li>MongoDB, Mongoose</li>
                <li>MySQL, Sequelize</li>
                <li>Express</li>
                <li>Node</li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Resume;
