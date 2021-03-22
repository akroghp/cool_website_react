import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {COMPANY_NAME, NAV_NAME_1, NAV_NAME_2, NAV_NAME_3, NAV_NAME_4, NAV_NAME_CONTACT, NAV_NAME_DROP_1,
    NAV_NAME_DROP_1_1, NAV_NAME_JOIN} from "../Constants"


// Stateless Functional Component
const NavigationBar = () => {
    return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Navbar.Brand href="#home">{COMPANY_NAME}
                    <span className="badge badge-pill badge-secondary"></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">{NAV_NAME_1}</Nav.Link>
                        <Nav.Link href="#link">{NAV_NAME_2}</Nav.Link>
                        <Nav.Link href="#depr">{NAV_NAME_3}</Nav.Link>
                        <Nav.Link href="http://localhost:3000/the_team.html">{NAV_NAME_4}</Nav.Link>
                        <NavDropdown title={NAV_NAME_DROP_1} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">{NAV_NAME_DROP_1_1}</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">{NAV_NAME_CONTACT}</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">{NAV_NAME_JOIN}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default NavigationBar;