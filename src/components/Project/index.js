import React from "react";

//import react-bootstrap style
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab } from "bootstrap";

//import images for portfolio
// import sweetNostalgia from '../../assets/sweet-nostalgia-screenshot.jpg';

function Project() {
  const projects = [
    {
      title: "Sweet Nostalgia",
      description:
        "A Fullstack E-commerce application for monthly subscriptions of decade candy sweets.",
      imgURL: projImg1,
    },
    {
      title: "Sweet Nostalgia",
      description:
        "A Fullstack E-commerce application for monthly subscriptions of decade candy sweets.",
      imgURL: projImg1,
    },
    {
      title: "Sweet Nostalgia",
      description:
        "A Fullstack E-commerce application for monthly subscriptions of decade candy sweets.",
      imgURL: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Sample Text ksejfaelfj</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" >Tab Three</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <p>{project.title}</p>
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
