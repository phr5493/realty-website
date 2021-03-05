import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionBar from './sectionBar';
import PropertyCard from './propertyCard';

function groupIntoThrees (children) {
    const output = []
    let currentGroup = []
  
    children.forEach((child, index) => {
      currentGroup.push(child)
  
      if (index % 3 === 2) {
        output.push(currentGroup)
        currentGroup = []
      }
    })
  
    return output
}

function PropertyCarousel() {

    const [data,setData]= useState([]);

    const getData=()=>{
        fetch('Property.json'
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
        <Container fluid id="PropertyCarousel" className="bg-primary px-0 pt-0 pb-2 ">
            <SectionBar title="Listings" link="/properties"/>
            <Carousel >
                {
                    data && data.length>0 &&
                    groupIntoThrees(data).map((group)=>
                        <Carousel.Item key={group[0]._id.toString()} className="m-auto">
                            <Row>
                                <Col>
                                    <PropertyCard data={group[0]}/>
                                </Col>
                                <Col>
                                    <PropertyCard data={group[1]}/>
                                </Col>
                                <Col>
                                    <PropertyCard data={group[2]}/>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    )
}

export default PropertyCarousel;