import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Styles from  './SearchCarousel.module.css';

function PropertySearch() {
    return (
        <div className={Styles.PropertySearch}>
            <Container fluid className="pt-3 bg-secondary border rounded-pill">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} xl={10} lg={10} md={10} sm={8} xs={8} controlId="formGridEmail">
                            <Form.Control type="text" placeholder="Search by Address or Phrase" />
                        </Form.Group>
                        
                        <Col xl={2} lg={2} md={2} sm={4} xs={4}>
                            <Button variant="primary" as="input" type="submit" value="Search" block/>{' '}
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </div>
    )
}

export default PropertySearch;