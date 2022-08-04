import React from 'react'
import { Link } from 'react-router-dom'
// import { Button, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar bg="primary" expand="lg" varient="dark">
      <Container>
        
        <Navbar.Brand> 
          <Link to="/">Jazzercise Invoice Maker</Link>

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link>
              <Link to="/reminders">My Reminders</Link>
              </Nav.Link>
            <Nav.Link href="#link">Instructor</Nav.Link>
            <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Make Invoice
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Google Calendar
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}




export default Header