import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Styles from  './SearchCarousel.module.css';

function SearchBar() {
    return (
        <div className={Styles.PropertySearch}>
            <Container fluid className="pt-3 bg-secondary">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} xs={8} controlId="formGridEmail">
                            <Form.Control type="text" placeholder="Zip code" />
                        </Form.Group>
                        <Form.Group as={Col} xs={1} controlId="formGridPrice">
                            <DropdownButton xs={1} variant="light" id="priceDropdown" title="Price">
                                <div className={Styles.PriceDropItem}>
                                    <Container fluid className="pb-0">
                                        <Form.Row>
                                            <Form.Group as={Col} controlId="formGridMinPrice">
                                                <Form.Control type="text" placeholder="Minmum Price" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridMaxPrice">
                                                <Form.Control type="text" placeholder="Maximum Price" />
                                            </Form.Group>
                                        </Form.Row>
                                    </ Container>
                                </div>
                            </DropdownButton>
                        </Form.Group>
                        <Form.Group as={Col} xs={1} controlId="formGridBeds">
                            <Form.Control as="select">
                                <option>Beds</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} xs={1} controlId="formGridBaths">
                            <Form.Control as="select">
                                <option>Baths</option>
                                <option>1+</option>
                                <option>2+</option>
                                <option>3+</option>
                                <option>4+</option>
                                <option>5+</option>
                            </Form.Control>
                        </Form.Group>
                        <Col xs={1}>
                            <Button variant="primary" as="input" type="submit" value="Search" block/>{' '}
                        </Col>
                    </Form.Row>
                </Form>
            </Container>
        </div>
    )
}

export default SearchBar;
