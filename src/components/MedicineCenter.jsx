import React from 'react';
import '../assets/scss/medicinecenter.scss';
import Heading from './Heading'
import map_pointer from '../assets/images/map.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const MedicineCenter = () => {
    return (
        <div className="medicinecenter_area">
            <Container>
                <Heading title = "Order Medicine Online from Popular Pharmacy Nearby"/>
                <Row>
                    {[...Array(3)].map((item, index) => {
                        return(
                            <Col className="">
                                <div className="div_border">
                                    <div className="div_padding">
                                        <h1>Shahbag Medicine Corner</h1>
                                        <Row>
                                            <Col md={2} className="med_center_col_1">
                                                <img className="map_pointer" src={map_pointer} alt="map_pointer" />
                                            </Col>
                                            <Col md={10} className="med_center_col_2">
                                                <p>Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh</p>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
                <button>View All</button>
            </Container>
        </div>
    )
}
export default MedicineCenter
