import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import "../css/index.css"
import testVid from "./video/video-2.mp4";
import {Route} from "react-router-dom";

function BannerComponent() {
    return (
        <div className="py-5 bg-color-theme-black">
            <Container fluid className="bg-color-theme-black nopadding color-theme-secondary">
                <Row className="text-center text-white">
                    <Col>
                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Ficons%2Ftruck_icon.png?alt=media&token=b460b592-1a4c-4926-b948-8d2619760ac0"/>
                        <h5>Transporting fish manure from local land-based aquacultures.</h5>
                    </Col>
                    <Col>
                        <img
                        src="https://firebasestorage.googleapis.com/v0/b/afeed-15838.appspot.com/o/Public%2Ficons%2Fupcycle_earth_icon_no_border.png?alt=media&token=687bb835-c024-4daf-b440-2731873fca98"/>
                        <h5>Upcycling sludge and turning it into biological resources.</h5>

                    </Col>
                    <Col>
                        <h1>POOP</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BannerComponent;