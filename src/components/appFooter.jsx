import React, {Component} from 'react';
import {Nav, Navbar, Row, Container, Col} from 'react-bootstrap';
import {COMPANY_NAME, COMPANY_SLOGAN} from "../Constants";

const AppFooter = () => {
    return (
        <React.Fragment>
                <Container fluid className="bg-dark text-white-50">
                    <Row className="mx-auto">
                        <Col className="d-flex justify-content-center mt-4 text-white">
                            <ul className="list-unstyled">
                                <li><h2>{COMPANY_NAME}</h2></li>
                                <li><p>{COMPANY_SLOGAN}</p></li>
                            </ul>
                        </Col>
                        <Col className="d-flex justify-content-center mt-4">
                            <ul className="list-unstyled">
                                <li><h5 className="text-white">Contact</h5></li>
                                <li>info@aqfeed.com</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </Col>
                        <Col className="d-flex justify-content-center mt-4">
                            <ul className="list-unstyled">
                                <li><h5 className="text-white">Social media</h5></li>
                                <li><a href="#" className="text-white-50">LinkedIn</a></li>
                                <li><a href="#" className="text-white-50">Youtube</a></li>
                                <li><a href="#" className="text-white-50">Facebook</a></li>
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