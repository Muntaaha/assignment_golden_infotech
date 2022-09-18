import React from 'react';
import '../assets/scss/news_blogs.scss';
import Heading from './Heading'
import arrow_1 from '../assets/images/arrow_3.png';
import arrow_2 from '../assets/images/arrow_4.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {blogs} from '../data';

const News_Blogs = () => {
    return (
        <div className="news_blogs_area">
            <Container>
                <Heading title = "News & Blogs"/>
                <Row>
                    {blogs.map((item, index) => {
                        return(
                            <Col xs={6} sm={6} md={3}>
                                <img className="blog_image" src={item.image} alt="blog_image" />
                                <p className="date">November 5, 2021</p>
                                <h1 className="title">{item.title}</h1>
                                <p className="description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                                </p>
                                <Row>
                                    <Col><p className="doctor_name">Dr. Saifur Rahman</p></Col>
                                    <Col><button>Read More</button></Col>
                                </Row>
                            </Col>
                        );
                    })}
                </Row>
                <div className="news_arrows">
                    <img className="arrow_1" src={arrow_1} alt="arrow_1" />
                    <img className="arrow_2" src={arrow_2} alt="arrow_2" />
                </div>
            </Container>
        </div>
    )
}

export default News_Blogs
