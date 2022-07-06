import React from "react";
import { projectCard } from "../ProjectCard.js";

//import react-bootstrap style
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

//import images for portfolio
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";
import project4 from "../../assets/project4.png";
import project5 from "../../assets/project5.jpg";
import project6 from "../../assets/project6.png";

function Project() {
  const projects = [
    {
      title: "Sweet Nostalgia",
      description:
        "A Fullstack E-commerce application for monthly subscriptions of decade candy sweets.",
      imgURL: project1,
    },
    {
      title: "Tech Blog",
      description:
        "CMS style tech blog.",
      imgURL: project2,
    },
    {
      title: "Weather Dashboard",
      description:
        "Front end API weather dashboard.",
      imgURL: project3,
    },
    {
        title: "Budget Tracker",
        description:
          "PWA budget tracker that can be used with no internet connection",
        imgURL: project4,
      },
      {
        title: "Florida's Hungry",
        description:
          "Front end application to locate restaurants in specific cities.",
        imgURL: project5,
      },
      {
        title: "Work Day Scheduler",
        description:
          "Work day scheduling application",
        imgURL: project6,
      }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Sample Text</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab One</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab Two??</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" >Tab Three??</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="first">
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <projectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <p>testing 2nd tab</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <p> testing 3rd tab</p>
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
