import React from 'react';
import '../assets/scss/verifieddoctors.scss';
import Heading from './Heading'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdDoubleArrow} from 'react-icons/md';

const VerifiedDoctors = () => {
    let data = ['General Physician',
                'Pediatrics / Child Care',
                'Gynaecology',
                'Neurology / Brain',
                'Pulmonology / Lungs',
                'Herbal medicine',
                'Gastroenterology',
                'Cardiology / Heart',
                'Ophthalmology / Eye',
                'Dentistry / Dental Care',
                'Endocrinology / Diabetes',
                'Occupational therapy',
                'Nephrology / Kidney',
                'Obstetrics',
                'ENT / Ear, Nose and Throat',
                'Parasitology',
                'Podiatry',
                'Oncology',
                'Psychiatry',
                'Rheumatology',
                'Urology',
                'Chiropractic',
                'Dermatology',
                'Vascular Surgery'
            ]
    let count = 0
    return (
        <div className="verifieddoctors_area">
            <Container>
                <Heading title = "Expert & Varified Doctors"/>
                <Row className="verifieddoctors_row">
                    <Col xs={6} sm={6} md={3}>
                        {data.slice(0,6).map((item, index) => {
                            return(
                                <p><span><MdDoubleArrow /></span>{item}</p>
                            );
                        })}
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        {data.slice(6,12).map((item, index) => {
                            return(
                                <p><span><MdDoubleArrow /></span>{item}</p>
                            );
                        })}
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        {data.slice(12,18).map((item, index) => {
                            return(
                                <p><span><MdDoubleArrow /></span>{item}</p>
                            );
                        })}
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        {data.slice(18,24).map((item, index) => {
                            return(
                                <p><span><MdDoubleArrow /></span>{item}</p>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default VerifiedDoctors
