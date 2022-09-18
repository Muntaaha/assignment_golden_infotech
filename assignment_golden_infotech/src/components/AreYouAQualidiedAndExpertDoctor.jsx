import React from 'react'
import '../assets/scss/are_you_a_qualified_and_expert_doctor.scss';
import Heading from './Heading'
import shadow6 from '../assets/images/shadow6.png';
import Ellipse_1 from '../assets/images/Ellipse_1.png';
import Ellipse_2 from '../assets/images/Ellipse_2.png';
import image5 from '../assets/images/image5.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AreYouAQualidiedAndExpertDoctor = () => {
    return (
        <div className="areyouadoctor_area">
            <Container>
                <Heading title = "Are You a Qualified & Expert Doctor?"/>
                <Row>
                    <Col md={7} className="areyouadoctor_area_col_1">
                        <h1>Be a Part of TM</h1>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button>Sign Up Now</button>
                    </Col>
                    <Col md={5} className="areyouadoctor_area_col_2">
                    <img className="shadow6" src={shadow6} alt="shadow6" />
                    <img className="Ellipse_1" src={Ellipse_1} alt="Ellipse_1" />
                    <img className="Ellipse_2" src={Ellipse_2} alt="Ellipse_2" />
                    <img className="image5" src={image5} alt="image5" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AreYouAQualidiedAndExpertDoctor
