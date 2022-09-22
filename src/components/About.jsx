import React from 'react';
import '../assets/scss/about.scss';
import Heading from './Heading'
import round2_1 from '../assets/images/round2_1.png';
import round2_2 from '../assets/images/round2_2.png';
import shadow2_1 from '../assets/images/shadow2_1.png';
import stock_image from '../assets/images/stock_image.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const About = () => {
    return (
        <div className="about_area">
            <Container>
                <Heading title = "About Us"/>
                <Row>
                    <Col sm={12} md={5} className="about_col_1">
                    <img className="shadow2_1" src={shadow2_1} alt="shadow2_1" />
                    <img className="round2_1" src={round2_1} alt="round2_1" />
                    <img className="round2_2" src={round2_2} alt="round2_2" />
                    <img className="stock_image" src={stock_image} alt="stock_image" />
                    </Col>
                    <Col sm={12} md={7} className="about_col_2">
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button>Read More</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
