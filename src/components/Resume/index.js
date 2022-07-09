import React from "react";

//import react-bootstrap
import { Button, Container, Card, Row, Col } from "react-bootstrap";

function Resume() {
  return (
    <section >
      <Container>
        <div className="resume-section d-flex align-items-center flex-column">
          <Row >
          <h1 className="title">
            Technical Skills and Experience
          </h1>
        </Row>
        <Button
          href="https://1drv.ms/b/s!Aka643mjyMAQpFdoHmkmERgX8IBb?e=EGgqeh"
          target="_blank"
          rel="noopener noreferrer"  variant="secondary" className=""
        >
          My Resume
        </Button>
        </div>
        <div className="d-flex justify-content-around" >
          <Card className="card-box" >
            <Card.Body>
              <h3>Frontend</h3>
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
          
        </div>
      </Container>
    </section>
  );
}

export default Resume;
