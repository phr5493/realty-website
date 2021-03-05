import React from 'react'
import Button from 'react-bootstrap/Button';

function ShortAbout() {
    return (
        <div id="CTA">
            <h1>
                Like a property?
            </h1>
            <h3>
                Call John Doe at (___)___-____
            </h3>
            <Button variant="primary" href="#Contact" size="lg">Or send an email</Button>
        </div>
    )
}

export default ShortAbout;