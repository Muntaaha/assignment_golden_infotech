import React from 'react';
import '../assets/scss/tm.scss';
import Heading from './Heading'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {tms} from '../data';

const TM = () => {
    return (
        <div className="tm_area">
            <Container>
                <Heading title = "Why Choose TM?"/>
                <Row>
                {tms.map((item, index) => {
                    return(
                        <Col xs ={6} sm={6} md={3} className="tm_col">
                            <img className="tm_image" src={item.image} alt='' />
                            <h1>{item.name}</h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                        </Col>
                    );
                })}
                </Row>
            </Container>
        </div>
    )
}

export default TM
