import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import "../css/index.css"
import testVid from "./video/video-2.mp4";
import {Route} from "react-router-dom";

function BannerComponent() {
    return (
        <div className="py-5 bg-color-theme-dark-blue img_background2_banner ">
            <Container fluid className="color-theme-secondary">
                <Row className="text-center text-white align-items-center justify-content-center">
                    <Col className="mx-5 col-md-2">
                        <img className="p-2"
                            height="100px"
                            width="100px"
                        src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Ficons%2Fdelivery_van_white.png?alt=media&token=89b0873d-f8b7-4210-9148-c069ac56c5d8"/>
                        <p>Collecting sludge from local aquacultures.</p>
                    </Col>
                    <Col className="mx-5 col-md-2">
                        <img className="p-2"
                            height="100px"
                            width="100px"
                        src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Ficons%2Frecycle_plant_white.png?alt=media&token=2ac4d08e-7555-46ae-8d88-efebaa2845f2"/>
                        <p>Upcycling the sludge into biological resources.</p>
                    </Col>
                    <Col className="mx-5 col-md-2">
                        <img className="p-2"
                             height="100px"
                             width="100px"
                             src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Ficons%2Fpackage_white.png?alt=media&token=f26bef85-c803-46fb-b66c-914d1830f07e"/>
                        <p>Produce sustainable fish feed.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BannerComponent;