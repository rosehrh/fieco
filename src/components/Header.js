import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="#">System Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Register</Nav.Link>
            
            <Nav.Link href="#" disabled>
              Login
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header
