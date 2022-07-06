import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
const [activeLink, setActiveLink] = useState('home');

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

  return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Thuy Nguyen</Navbar.Brand>  
          <Nav className="me-auto">
            <Nav.Link href="#about" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About Me</Nav.Link>
            <Nav.Link href="#portfolio"className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link' }  onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default Header;
