import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchBar from './searchBar';
import PropertyCard from '../propertyCard';

function PropertyContainer() {

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
        <Container fluid id="PropertyContainer" className="p-0">
            <SearchBar />
            <Container fluid id="PropertyCards" className="bg-primary px-5 pt-5 pb-0 ">
                <Row>
                    {
                        data && data.length>0 &&
                        data.map(
                            (item)=>
                            <Col xs={12} sm={6} lg={4} key={item._id.toString()}>
                                <PropertyCard data={item}/>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default PropertyContainer;