import Link from 'next/link'
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BottomBar() {
    return (
        <Navbar bg="secondary" variant="dark" id="BottomNav">
            <Container className="d-flex justify-content-around">
                <Row>
                    <Col xs={6} md="auto">
                        <Nav defaultActiveKey="/home" className="flex-column" id="Contact">
                            <h5>Contact</h5>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="email" placeholder="name" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>  Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>  Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Form>
                        </Nav>
                    </Col>
                    <Col xs={6} md="auto">
                        <Nav className="flex-column ">
                            <h5>Contact Info</h5>
                            <p>Address</p>
                            <Nav.Link>
                                123 Main St. 
                                <br></br> 
                                Suite #777 
                                <br></br> 
                                Ink, Fl 77777
                            </Nav.Link>
                            <p>Phone</p>
                            <Nav.Link href="#root">(321)123-4567</Nav.Link>
                            <p>Email</p>
                            <Nav.Link href="#root">Lorem@Ipsum.com</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={6} md="auto">
                        <Nav className="flex-column ">
                            <h5>Quicklinks</h5>
                            <Link href="/" passHref>
                                <Nav.Link>Home</Nav.Link>
                            </Link>
                            <Link href="/properties" passHref>
                                <Nav.Link>Properties</Nav.Link>
                            </Link>
                            <Link href="/testimonials" passHref>
                                <Nav.Link>Testimonials</Nav.Link>
                            </Link>
                            <Link href="/about" passHref>
                                <Nav.Link>About</Nav.Link>
                            </Link>
                        </Nav>
                    </Col>
                    <Col xs={6} md="auto">
                        <Nav className="flex-column">
                            <h5>Follow</h5>
                            <Link href="https://facebook.com/" passHref>
                                <Nav.Link>Facebook</Nav.Link>
                            </Link>
                            <Link href="https://google.com/" passHref>
                                <Nav.Link>Google</Nav.Link>
                            </Link>
                            <Link href="https://instagram.com/" passHref>
                                <Nav.Link>Instagram</Nav.Link>
                            </Link>
                            <Link href="https://yelp.com/" passHref>
                                <Nav.Link>Yelp</Nav.Link>
                            </Link>
                        </Nav>
                    </Col>
                    <Col xs={12} md="auto">
                        <Nav className="flex-column text-center">
                            <Link href="/" passHref>
                                <Navbar.Brand>
                                    <img
                                        src="/images/logo.jpg" 
                                        alt="Navbar Company Logo"
                                        width="100%"
                                        height="100%"
                                        className="d-inline-block align-top"
                                    />
                                </Navbar.Brand>
                            </Link>
                            <Link href="/" passHref>
                                <Navbar.Brand>
                                    John Doe Realty
                                </Navbar.Brand>
                            </Link>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default BottomBar;
