import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({setPage}) {
  return (
    <>
      <Navbar expand="lg">
        <Nav className="about-me ms-auto">
          <Link to="/about">
            <Nav.Link href="/about" className="navbar-link" onClick={() => { setPage("about"); }}>About Me</Nav.Link>
          </Link>
          <Link to="/portfolio">
            <Nav.Link href="/portfolio" className="navbar-link" onClick={() => { setPage("portfolio"); }} >Portfolio</Nav.Link>
          </Link>
          <Link to="resume">
            <Nav.Link href="/resume"  className="navbar-link"  onClick={() => { setPage("resume"); }}>Resume</Nav.Link>
          </Link>
          <Link to="contact">
            <Nav.Link  href="/contact"  className="navbar-link"  onClick={() => { setPage("contact"); }}>Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;

{
  /* // <Navbar expand="lg">
    //   <Container>
    //     <Nav className="about-me ms-auto">
    //       <Nav.Link href="/about" className="navbar-link" onClick={() => { setPage("about"); }}>About Me</Nav.Link>
          
    //       <Nav.Link href="/portfolio" className="navbar-link" onClick={() => { setPage("portfolio"); }} >Portfolio</Nav.Link>

    //       <Nav.Link href="/resume"  className="navbar-link"  onClick={() => { setPage("resume"); }}>Resume</Nav.Link>

    //       <Nav.Link  href="/contact"  className="navbar-link"  onClick={() => { setPage("contact"); }}>Contact</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar> */
}
