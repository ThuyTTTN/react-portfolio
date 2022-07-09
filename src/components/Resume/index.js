import React from "react";

//import react-bootstrap
import { Button, Container, Card, Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <section >
      <Container >
        <Col >
        <Row >
          <h1 className="title">
            Technical Skills and Experience
          </h1>
        </Row>
        <Button
          href="https://1drv.ms/b/s!Aka643mjyMAQpFdoHmkmERgX8IBb?e=EGgqeh"
          target="_blank"
          rel="noopener noreferrer" className="align-items-center justify-content-center"
        >
          My Resume
        </Button>
        <Row className="d-flex" >
          <Card className="card-box" >
            <Card.Body>
              <h3>Frontend</h3>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
              </ul>
            </Card.Body>
          </Card>
          <Card className="card-box">
            <Card.Body>
              <h3>Backend</h3>
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
          
        </Row>
        </Col>
      </Container>
    </section>
  );
}

export default Resume;
