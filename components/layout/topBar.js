import Link from 'next/link'
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function TopBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top" id="TopNav">
            <Link href="/" passHref>
                <Navbar.Brand>
                <img
                    src="/images/logo.jpg"
                    alt="Navbar Company Logo"
                    width="90"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                John Doe Realty
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Form inline>
                        <Link href="/properties" passHref><Button variant="dark">Properties</Button></Link>
                        <Link href="/testimonials" passHref><Button variant="dark">Testimonials</Button></Link>
                        <Button variant="outline-light" href="#Contact">Contact</Button>
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default TopBar;
