import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionBar from './sectionBar';
import PropertyCard from '../propertyCard';
import Groupings from './logic/groupings';

function PropertyCarousel() {

    const [data,setData]= useState([]);
    const [width, setWidth] = useState(0);

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

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <Container fluid id="PropertyCarousel" className="bg-primary px-0 pt-0 pb-2 ">
            <SectionBar title="Listings" link="/properties"/>
            <Carousel >
                {
                    data && data.length>0 &&
                    Groupings(data).map((group)=>
                        <Carousel.Item key={group[0]._id.toString()} className="m-auto">
                            <Row>
                                {
                                    group && group.length>0 &&
                                    group.map((card)=>
                                        <Col key={card._id.toString()}>
                                            <PropertyCard data={card}/>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </Container>
    )
}

export default PropertyCarousel;