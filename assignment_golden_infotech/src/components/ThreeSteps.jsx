import React from 'react';
import '../assets/scss/threesteps.scss';
import Heading from './Heading'
import shadow5 from '../assets/images/shadow5.png';
import image4 from '../assets/images/image4.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {threesteps} from '../data';

const ThreeSteps = () => {
    return (
        <div className="threestesps_area">
            <Container>
                <Heading title = "Only Three Easy Steps to Follow"/>
                <Row>
                    <Col md={5} className="threestesps_col_1">
                    <img className="shadow5" src={shadow5} alt="shadow5" />
                    <img className="image4" src={image4} alt="image4" />
                    </Col>
                    <Col md={7} className="threestesps_col_2">
                        {/* <Row> */}
                            {threesteps.map((item, index) => {
                                return(
                                    <Row>
                                        <Col md={1}className="number_contents"><h2>{item.number}</h2></Col>
                                        <Col md={10}>
                                            <div className="text_contents">
                                                <h1>{item.title}</h1>
                                                <p>{item.description}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                );
                            })}
                        {/* </Row> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ThreeSteps
