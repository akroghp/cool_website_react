import React, {Component} from 'react';
import {Nav, Navbar, Row, Container, Col} from 'react-bootstrap';
import {COMPANY_NAME, COMPANY_SLOGAN} from "../Constants";

const AppFooter = () => {
    return (
        <React.Fragment>
                <Container fluid variant="light" className="">
                    <Row className="mx-auto">
                        <Col className="d-flex justify-content-center mt-4">
                            <ul className="list-unstyled">
                                <li><h2>{COMPANY_NAME}</h2></li>
                                <li><p>{COMPANY_SLOGAN}</p></li>
                            </ul>
                        </Col>
                        <Col className="d-flex justify-content-center mt-4">
                            <ul className="list-unstyled">
                                <li><h5>Contact</h5></li>
                                <li>info@aqfeed.com</li>
                                <li>phone: +45 12345678</li>
                                <li></li>
                            </ul>
                        </Col>
                        <Col className="d-flex justify-content-center mt-4">
                            <ul className="list-unstyled">
                                <li><h5>Social media</h5></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Youtube</a></li>
                                <li><a href="#">Facebook</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center m-2">
                            <p>Copyright &copy; {new Date().getFullYear()} AQfeed ApS. All rights reserved. </p>
                        </Col>
                    </Row>
                    {/* FOOTER BOTTOM */}

                </Container>
        </React.Fragment>
    )

}

export default AppFooter;