import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import "../css/index.css"

const CardComponent = () => {
    //const {loadImage, getText} = this.props;

    return(
            <Card className="m-2 bg-color-theme-main shadow-sm text-white">
                <Card.Img src="https://picsum.photos/1000/400" alt="Card image"  />
                <Card.ImgOverlay className="d-flex flex-column">
                    <Card.Title className="mt-auto m-0"><Card.Link href="#">Card title</Card.Link></Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card>

    );

}

export default CardComponent;