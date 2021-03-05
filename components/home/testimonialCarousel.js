import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import SectionBar from './sectionBar';
import Testimonial from './testimonial';
import Styles from  './TestimonalCarousel.module.css';

function TestimonalCarousel() {

    const [data,setData]=useState([]);

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
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div id="TestimonialCarousel">
            <SectionBar title="Testimonials" link="/testimonials"/>
            <Carousel className={Styles.Testimonial} controls={false} fade>
                {
                    data && data.length>0 &&
                    data.map(
                        (item)=>
                        <Carousel.Item key={item._id.toString()} className="m-auto">
                            <Testimonial data={item}/>
                        </Carousel.Item>
                    )
                }
            </Carousel>
        </div>
    )
}

export default TestimonalCarousel;