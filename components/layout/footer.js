import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="bg-secondary">
            <Container>
                <Row>
                    <Col>
                        <p>
                            Created by <Link href="https://phr5493.github.io/">Patrick Radke</Link> · Copyright © 2021 · All rights reserved
                        </p>
                    </Col>
                    <Col>
                        <p className="float-right"><Link href="#banner" scroll={true}>Back to top</Link></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;
