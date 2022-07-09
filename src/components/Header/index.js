// import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";



function Header({ setPage }) {

  return (
    
    <Navbar expand="lg">
      <Container>
        <Nav className="about-me ms-auto">
          <Nav.Link href="/about" className="navbar-link" onClick={() => { setPage("about"); }}>About Me</Nav.Link>
          
          <Nav.Link href="/portfolio" className="navbar-link" onClick={() => { setPage("portfolio"); }} >Portfolio</Nav.Link>

          <Nav.Link href="/resume"  className="navbar-link"  onClick={() => { setPage("resume"); }}>Resume</Nav.Link>

          <Nav.Link  href="/contact"  className="navbar-link"  onClick={() => { setPage("contact"); }}>Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
