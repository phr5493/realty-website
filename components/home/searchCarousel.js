import React from 'react'
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import PropertySearch from './propertySearch';
import Styles from  './SearchCarousel.module.css';

function SearchCarousel() {
    return (
        <Container fluid className="p-0">
            <div className={Styles.Search}>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <Image className="d-block w-100" src="/images/background-slide-1.jpg" alt="First Slide"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="d-block w-100" src="/images/background-slide-2.jpg" alt="Second Slide"></Image>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image className="d-block w-100" src="/images/background-slide-3.jpg" alt="Third Slide"></Image>
                    </Carousel.Item>
                </Carousel>
                <PropertySearch />
            </div>
        </Container>
    )
}

export default SearchCarousel;