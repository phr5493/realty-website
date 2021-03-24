import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Testimonial from '../testimonial';

function TestimonialContainer() {

    const [data,setData]= useState([]);

    const getData=()=>{
        fetch('Testimonial.json'
            ,{
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            console.log(response);
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson);
        });
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <Container fluid id="TestimonialContainer" className="bg-primary px-0 py-3">
            <Row className="justify-content-center">
                <Container>
                    <Col className="my-5 text-center">
                        <h1>Testimonals</h1>
                    </Col>
                </Container>
            </Row>
            {
                data && data.length>0 &&
                data.map(
                    (item)=>
                    <Container className="bg-primary px-0 py-3">
                        <Container className="bg-secondary px-0 py-3">
                            <Testimonial data={item}/>
                        </Container>
                    </Container>
                )
            }
        </Container>
    )
}

export default TestimonialContainer;