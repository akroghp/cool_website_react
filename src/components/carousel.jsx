import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import duckImage from "../duckImage.jpeg"
import "../index.css"

const CarouselComponent  = (props) =>  {
    return(

        <Carousel className="shadow">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.imgFile3}
                    alt="firstdingus"
                />
                <Carousel.Caption>
                    <h3>{props.title1}</h3>
                    <p>{props.description1}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.imgFile2}
                    alt="asdfasdfas"
                />
                <Carousel.Caption>
                    <h3>{props.title2}</h3>
                    <p>{props.description2}</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.imgFile3}
                    alt="sadkfmalskdfæashido"
                />
                <Carousel.Caption>
                    <h3>{props.title3}</h3>
                    <p>{props.description3}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );



}

export default CarouselComponent;