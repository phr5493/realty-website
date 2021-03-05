import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ShortAbout from './shortAbout';
import Contact from './contact';

function HomeText(props) {
    return (
        <Row className="m-auto bg-secondary justify-content-center">
            <Container className="p-0">
                <Col className="my-5 text-center">
                    {props.choice === "About" && <ShortAbout />} 
                    {props.choice === "Contact" && <Contact />} 
                </Col>
            </Container>
        </Row>
    )
}

export default HomeText;