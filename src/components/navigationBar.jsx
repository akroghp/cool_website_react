import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {COMPANY_NAME, NAV_NAME_1, NAV_NAME_2, NAV_NAME_3, NAV_NAME_4, NAV_NAME_CONTACT, NAV_NAME_DROP_1,
    NAV_NAME_DROP_1_1, NAV_NAME_JOIN} from "../Constants"
import {LinkContainer} from "react-router-bootstrap"
import duckImage from "../duckImage.jpeg";
import "../index.css"


// Stateless Functional Component
const sectionStyle = {
    //backgroundImage: `url(${duckImage})`,
    backgroundSize: "cover",
    backgroundColor: "",

}


const NavigationBar = () => {
    return(
        <div>
            <Navbar variant="light"  expand="sm" className="">
                <LinkContainer to="/">
                    <Navbar.Brand className="">
                        <img
                            alt=""
                            src="/logo192.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        {COMPANY_NAME}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="mr-auto">
                        <LinkContainer to="/about">
                            <Nav.Link>{NAV_NAME_1}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/technology">
                            <Nav.Link>{NAV_NAME_2}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/news">
                            <Nav.Link>{NAV_NAME_3}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/team">
                            <Nav.Link>{NAV_NAME_4}</Nav.Link>
                        </LinkContainer>
                        {/**
                        <NavDropdown title={NAV_NAME_DROP_1} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">{NAV_NAME_DROP_1_1}</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                         **/ }
                    </Nav>
                    <Nav>
                        <LinkContainer to="/contact">
                            <Nav.Link href="#deets">{NAV_NAME_CONTACT}</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/join">
                            <Nav.Link eventKey={2} href="#memes">{NAV_NAME_JOIN}</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default NavigationBar;