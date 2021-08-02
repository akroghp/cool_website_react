import React, {Component} from 'react';
import {Button, Card, Col, Container, Row} from 'react-bootstrap';


const TextComponent = (props) => {
    return(
        <div className="bg-color-theme-secondary2">
            <Container fluid="sm" className="text-center border-dark">
                <Row className="py-3 justify-content-center">
                    <Col className="col-sm-4 col-8 py-2">
                        <h4>What?</h4>
                        <h5>{props.leftText1}
                            <span className="color-theme-red">{props.leftSpanText1}</span>
                            {props.leftText2}
                        </h5>
                    </Col>
                    <Col className="col-sm-4 col-8 py-2 ">
                        <h4>How?</h4>
                        <h5>{props.middleText1}
                            <span className="color-theme-red">{props.middleSpanText}</span>
                            {props.middleText2}
                        </h5>
                    </Col>
                    <Col className="col-sm-4 col-8 py-2">
                        <h4>Why?</h4>
                        <h5>{props.rightText1}
                            <span className="color-theme-red">{props.rightSpanText}</span>
                            {props.rightText2}
                        </h5>
                    </Col>
                </Row>

            </Container>
        </div>


    )
}

export default TextComponent;

