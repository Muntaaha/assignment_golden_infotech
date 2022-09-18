import React from 'react'
import '../assets/scss/video_consultation.scss';
import Heading from './Heading'
import shadow4 from '../assets/images/shadow4.png';
import image3 from '../assets/images/image3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const VideoConsultation = () => {
    return (
        <div className="vc_area">
            <Container>
                <Heading title = "Video Consultation from the Best doctors"/>
                <Row>
                    <Col md={7} className="vc_col_1">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button>Read More</button>
                    </Col>
                    <Col md={5} className="vc_col_2">
                    <img className="shadow4" src={shadow4} alt="shadow4" />
                    <img className="image3" src={image3} alt="image3" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default VideoConsultation
