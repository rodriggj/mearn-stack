import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>React-Bootstrap</Navbar.Brand>
              </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                  <LinkContainer to="/cart">
                    <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/signin">
                    <Nav.Link><i className="fas fa-user"></i>Sign In</Nav.Link>
                  </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>   
    </header>
  )
}

export default Header   