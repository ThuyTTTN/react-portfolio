import React from "react";
import ProjectCard from "../ProjectCard.js";
import "animate.css";
import TrackVisibility from "react-on-screen";

//import react-bootstrap style
import { Container, Row, Col } from "react-bootstrap";

//import images for portfolio
import project1 from "../../assets/project1-416.jpg";
import project2 from "../../assets/project2-tech-blog.png";
import project3 from "../../assets/project3-416.png";
import project4 from "../../assets/project4-budget.png";
import project5 from "../../assets/project5-416.jpg";
import project6 from "../../assets/project6-workday.png";

function Project() {
  const projects = [
    {
      title: "Sweet Nostalgia",
      description:
        "A Fullstack E-commerce application for monthly subscription of candies from specific decades.",
      imgUrl: project1,
    },
    {
      title: "Tech Blog",
      description: "CMS style tech blog.",
      imgUrl: project2,
    },
    {
      title: "Weather Dashboard",
      description: "Front end API weather dashboard.",
      imgUrl: project3,
    },    
    {
      title: "Budget Tracker",
      description:
        "PWA budget tracker that can be used with no internet connection",
      imgUrl: project4,
    },
    {
      title: "Florida's Hungry",
      description:
        "Front end application to locate restaurants in specific cities.",
      imgUrl: project5,
    },
    {
      title: "Work Day Scheduler",
      description: "Work day scheduling application",
      imgUrl: project6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
        <h2 className="title" style={{textAlign: "center"}}>Portfolio Projects</h2>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
