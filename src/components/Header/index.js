import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header({setPage}) {
// const [activeLink, setActiveLink] = useState('home');

// const onUpdateActiveLink = (value) => {
//   setActiveLink(value);
// }


  return (
      <Navbar expand="lg">
        <Container>
          {/* <Navbar.Brand href="#home">Thuy Nguyen</Navbar.Brand>   */}
          <Nav className="about-me ms-auto">
            <Nav.Link href="/about" className= 'navbar-link' onClick={() => {
              // onUpdateActiveLink('home')
              setPage('about')
              }}>About Me</Nav.Link>
            <Nav.Link href="/portfolio" className='navbar-link'  onClick={() => {
              // onUpdateActiveLink('portfolio')
              setPage('portfolio')}}>
                Portfolio</Nav.Link>
            <Nav.Link href="/resume" className= 'navbar-link' onClick={() => {
              // onUpdateActiveLink('resume')
              setPage('resume')
              }}>Resume</Nav.Link>
            <Nav.Link href="/contact" className= 'navbar-link'  onClick={() =>{
              //  onUpdateActiveLink('contact')
               setPage('contact')
               }}>Contact</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default Header;
