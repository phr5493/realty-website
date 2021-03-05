import Image from 'next/image'
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
    return (
        <div id="banner">
            <Row className="m-auto justify-content-center">
                <Col className="text-center">
                    <Image src="/images/logo.jpg" height={80} width={320} alt="Company Logo" />
                    <h1>John Doe, Realtor</h1>
                </Col>
            </Row>
        </div>
    )
}

export default Banner;