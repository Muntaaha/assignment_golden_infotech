import React from 'react';
import '../assets/scss/services.scss';
import Heading from './Heading'
import service1 from '../assets/images/service1.png';
import service2 from '../assets/images/service2.png';
import service3 from '../assets/images/service3.png';
import service4 from '../assets/images/service4.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdDoubleArrow} from 'react-icons/md';

const Services = () => {
    return (
        <div className="services_area">
            <Container>
                <Heading title = "Our Services"/>
                <Row className="services_row">
                    <Col sm={12} md={6} className="services_col_1">
                        <div className="service_image_border_1">
                            <img className="service1" src={service1} alt="service1" />
                        </div>
                        <div className="service_image_border_2">
                            <img className="service2" src={service2} alt="service2" />
                        </div>
                        <div className="service_circle">
                            <div className="service_circle_background"></div>
                        </div>
                        <div className="service_image_border_3">
                            <img className="service3" src={service3} alt="service3" />
                        </div>
                        <div className="service_image_border_4">
                            <img className="service4" src={service4} alt="service4" />
                        </div>
                    </Col>
                    <Col sm={12} md={5} className="services_col_2">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button>Read More</button>
                        <div className="bullet-points">
                            <ul>
                                <li><span><MdDoubleArrow /></span><span>General Healthcare</span></li>
                                <li><span><MdDoubleArrow /></span>Maternal Healthcare</li>
                                <li><span><MdDoubleArrow /></span>Child Healthcare</li>
                                <li><span><MdDoubleArrow /></span>Elder Healthcare</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Services
