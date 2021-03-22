import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import duckImage from '../duckImage.jpeg'

const CardComponent = () => {
    //const {loadImage, getText} = this.props;

    return(
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src={duckImage} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );

}

export default CardComponent;