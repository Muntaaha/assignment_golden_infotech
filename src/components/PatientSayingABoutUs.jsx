import React from 'react'
import Heading from './Heading'
import image8 from '../assets/images/image8.png';
import image7 from '../assets/images/image7.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';
import quote_1 from '../assets/images/quote_1.png';
import quote_2 from '../assets/images/quote_2.png';
import arrow_1 from '../assets/images/arrow_1.png';
import arrow_2 from '../assets/images/arrow_2.png';
import '../assets/scss/patient_saying.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PatientSayingABoutUs = () => {
    return (
        <div className="patient_saying_area">
            <Container>
            <Heading title = "What Are The Patients Saying About us"/>
                <Row className="patient_saying_row">
                    <Col xs={12} sm={12} md={5} className="patient_saying_col_1">
                        <img className="image8" src={image8} alt="image8" />
                    </Col>
                    <Col xs={12} sm={12} md={7} className="patient_saying_col_2">
                        <img className="quote_1" src={quote_1} alt="quote_1" />
                        <p className="quote_text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled.
                        </p>
                        <p className="student_name">Foisal Morshed</p>
                        <p className="student_study">Student, CSE, University of Royal</p>
                        <img className="quote_2" src={quote_2} alt="quote_2" />
                        <img className="image7" src={image7} alt="image7" />
                        <img className="image9" src={image9} alt="image9" />
                        <img className="image10" src={image10} alt="image10" />
                    </Col>
                </Row>
                <div className="arrows">
                    <img className="arrow_1" src={arrow_1} alt="arrow_1" />
                    <img className="arrow_2" src={arrow_2} alt="arrow_2" />
                </div>
            </Container>
        </div>
    )
}


export default PatientSayingABoutUs
