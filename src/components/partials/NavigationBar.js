import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function NavigationBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
            <Container>
            <Navbar.Brand href="/">Expense Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Overview</Nav.Link>
                <Nav.Link href="#pricing">Why Us?</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">GitHub</Nav.Link>
                <Nav.Link eventKey={2} href="/login">
                    Login
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
