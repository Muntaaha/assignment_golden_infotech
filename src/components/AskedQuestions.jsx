import React from 'react'
import Heading from './Heading'
import shadow7 from '../assets/images/shadow7.png';
import image6 from '../assets/images/image6.png';
import minus_sign from '../assets/images/minus_sign.png';
import plus_sign from '../assets/images/plus_sign.png';
import '../assets/scss/asked_questions.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AskedQuestions = () => {
    return (
        <div className="asked_question_area">
            <Container>
            <Heading title = "Frequently Asked Questions"/>
                <Row>
                    <Col xs={12} sm={12} md={5} className="asked_question_col_1">
                        <img className="shadow7" src={shadow7} alt="shadow7" />
                        <img className="image6" src={image6} alt="image6" />
                    </Col>
                    <Col xs={12} sm={12} md={7} className="asked_question_col_2">
                        <div className="questions">
                            <span>
                                <h6>What is TM?</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting<br /> industry. Lorem Ipsum has been the industry's standard</p>
                            </span>
                            <span><img className="minus_sign" src={minus_sign} alt="minus_sign" /></span>
                        </div>
                        <div className="questions">
                            <span><h6>What do you treat?</h6></span>
                            <span><img className="plus_sign" src={plus_sign} alt="plus_sign" /></span>
                        </div>
                        <div className="questions">
                            <span><h6>How does it work?</h6></span>
                            <span><img className="plus_sign" src={plus_sign} alt="plus_sign" /></span>
                        </div>
                        <div className="questions">
                            <span><h6>Who provides consultation on TM?</h6></span>
                            <span><img className="plus_sign" src={plus_sign} alt="plus_sign" /></span>
                        </div>
                        <div className="questions">
                            <span><h6>Are the registered Doctors varified?</h6></span>
                            <span><img className="plus_sign" src={plus_sign} alt="plus_sign" /></span>
                        </div>
                        <div className='question_button'>
                            <button>View All FAQ’s</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AskedQuestions
