import React from 'react';
import Card from 'react-bootstrap/Card'

function PropertyCard(props) {
    return (
        <Card className="text-center mx-2 pb-2" bg="primary" border="primary">
            <Card.Img variant="top" src={props.data.picture} />
            <Card.Body>
                <Card.Title>{props.data.address}, <br/>{props.data.zipcode}</Card.Title>
                <Card.Subtitle className="text-light">{props.data.price}</Card.Subtitle>
                <Card.Text>{props.data.footage} sqft <br/> {props.data.beds} beds/{props.data.baths} baths</Card.Text>
                <Card.Link className="text-white-50" href="#root">View</Card.Link>
            </Card.Body>
      </Card>
    )
}

export default PropertyCard;