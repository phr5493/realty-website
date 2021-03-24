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
                        <Form.Group as={Col} xs={2} controlId="formGridEmail">
                            <Form.Control type="text" placeholder="Zip code" />
                        </Form.Group>
                        <Form.Group as={Col} xs={2} controlId="formGridMinPrice">
                            <Form.Control type="text" placeholder="Minimum Price" />
                        </Form.Group>
                        <Form.Group as={Col} xs={2} controlId="formGridMaxPrice">
                            <Form.Control type="text" placeholder="Maximum Price" />
                        </Form.Group>
                        <Form.Group as={Col} xs={2} controlId="formGridBeds">
                            <Form.Control as="select">
                                <option>Beds</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} xs={2} controlId="formGridBaths">
                            <Form.Control as="select">
                                <option>Baths</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                            </Form.Control>
                        </Form.Group>
                        <Col xs={2}>
                            <Button variant="primary" as="input" type="submit" value="Search" block/>{' '}
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </div>
    )
}

export default PropertySearch;