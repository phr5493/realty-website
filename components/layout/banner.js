import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Banner() {
    return (
        <div id="banner">
            <Row className="m-auto justify-content-center">
                <Col className="text-center">
                    <Image src="/images/logo.jpg" alt="Company Logo"></Image>
                    <h1>John Doe, Realtor</h1>
                </Col>
            </Row>
        </div>
    )
}

export default Banner;