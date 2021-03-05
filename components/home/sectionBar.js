import Link from 'next/link';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SectionBar(props) {
    return (
        <Navbar bg="primary" variant="light" expand="sm" id={props.title}>
            <Navbar.Brand>
                {props.title}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Form inline>
                        <Link href={props.link} passHref>
                            <Button variant="primary">View more</Button>
                        </Link>
                    </Form>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SectionBar;
