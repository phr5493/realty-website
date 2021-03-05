import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonial(props) {
    return (
        <Row key={props.data.id}  className="justify-content-center">
            <Container>
                <Col className="my-5 text-center">
                    <h3>
                        {props.data.about}
                    </h3>
                    <p>
                        -{props.data.name.first} {props.data.name.last}
                    </p>
                </Col>
            </Container>
        </Row>
    )
}

export default Testimonial;