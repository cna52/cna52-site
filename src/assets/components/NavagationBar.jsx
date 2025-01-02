import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './style.css'

export default function NavagationBar() {
  const location = useLocation();

  const links = [
    {id: 1, name: "Home", path: "#home"},
    {id: 2, name: "Portfolio", path: "#portfolio"},
    {id: 3, name: "Contact", path: "#contact"},
  ]
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <Navbar 
      bg="transparent" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Camille's Personal Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map(({ id, name, path }) => (
              <Nav.Link
                as={Link}
                to={path}
                key={id}
                className={`custom-nav-link ${
                  isActive(path) ? "active" : ""
                }`}
              >
                {name}
              </Nav.Link>
            ))}
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}
