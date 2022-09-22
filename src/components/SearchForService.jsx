import React from 'react'
import shadow1_1 from '../assets/images/shadow1_1.png';
import shadow1_2 from '../assets/images/shadow1_2.png';
import apple_store from '../assets/images/apple_store.png';
import play_store from '../assets/images/play_store.png';
import doctor_image from '../assets/images/doctor_image.png';
import '../assets/scss/searchforservice.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchForService = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} lg= {5} md={5} className="service_col_1">
                        <img className="shadow-image1" src={shadow1_1} alt="shadow-image1" />
                        <div className="text">
                            <h1>Protect and Take<br /> Care of Your Health</h1>
                            <p>Download Our App and feel free to take<br />
                                your Health Advice from a Specialist.
                            </p>
                        </div>
                        <button>Search for a Service</button>
                        <div class="store_buttons">
                            <img className="store_button" src={apple_store} alt="apple_store" />
                            <img className="store_button" src={play_store} alt="play_store" />
                        </div>
                    </Col>

                    <Col xs={12} lg= {7} md={7} className="service_col_2">
                        <img className="shadow-image2" src={shadow1_2} alt="shadow-image2" />
                        <img className="doctor_image" src={doctor_image} alt="doctor-image" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SearchForService
