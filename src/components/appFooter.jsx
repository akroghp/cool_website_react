import React, {Component} from 'react';
import {Nav, Navbar, Row, Container, Col} from 'react-bootstrap';
import {COMPANY_NAME, COMPANY_SLOGAN} from "../Constants";
import "../css/index.css"

const AppFooter = () => {
    return (
        <Container fluid className="bg-color-theme-dark-blue text-white fixed_height d-flex flex-column">
            <Row className="">
                <Col className="p-5">
                        <h1 className="font-weight-bold">Please don't hesitate to contact us</h1>
                </Col>
            </Row>
            <Row className="row justify-content-center my-auto text-center">
                <Col className="col-12 col-sm-4 my-auto p-5 text-left">
                    <p className="color-theme-bright-orange font-weight-bold ">
                        Contact</p>
                    <ul className="list-unstyled">
                        <li> <img
                            src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Flogos%2Flogo_white_no_moto.png?alt=media&token=f2f49ab0-45f5-45f9-91aa-d850e75bd81f"
                            className="img_responsive pb-2"
                        /></li>
                        <li><p>{COMPANY_SLOGAN}</p></li>
                    </ul>
                </Col>
                <Col className="col-sm-4 my-auto">
                        <ul className="list-unstyled">
                            <li><a href="mailto:home@aqfeed.dk">home@aqfeed.dk</a></li>
                        </ul>
                </Col>
                <Col className="col-sm-4 my-auto">
                        <ul className="list-unstyled">
                            <li><a href="https://www.linkedin.com/company/aqfeed/">LinkedIn</a></li>
                        </ul>
                </Col>
            </Row>
            <div className="mt-auto text-center">
                <p className="">Copyright &copy; {new Date().getFullYear()} AQfeed ApS. All rights reserved. </p>
            </div>


            {/* FOOTER BOTTOM */}
        </Container>
    )

}

export default AppFooter;