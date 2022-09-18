import React from 'react'
import Logo from '../assets/images/Logo.png'
import '../assets/scss/footer.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {MdDoubleArrow} from 'react-icons/md';
import Vector_9 from '../assets/images/Vector_9.png';
import apple_footer from '../assets/images/apple_footer.png';
import play_store_footer from '../assets/images/play_store_footer.png';
import {footer_contact, footer_social_icon} from '../data';
const Footer = () => {
    let data = [
        'Doctor',
        'Services',
        'Pharmacy Owner',
        'About Us',
        'Blog',
        'Contact Us',
        'Terms & Conditions',
        'Privacy Policy',
        'FAQ'
    ]
    return (
        <Container>
            <div className="footer_area">
                    <div className="logo_area">
                        <img className="logo-image" src={Logo} alt="Logo" />
                        <span className="logo-text">TM</span>
                    </div>
                <Row className="footer_row_2">
                    <Col md={4}>
                        <p className="details">Lorem ipsum is dolor sit amet,<br /> csectetur adipiscing elit, dolore smod<br /> tempor incididunt ut labore et.</p>
                    </Col>
                    <Col md={3}>
                        {data.slice(0,3).map((item, index) => {
                            return(
                                <p><span><MdDoubleArrow /></span>{item}</p>
                            );
                        })}
                    </Col>
                    <Col md={2}>
                        {data.slice(3,6).map((item, index) => {
                            return(
                                <p><span><MdDoubleArrow /></span>{item}</p>
                            );
                        })}
                    </Col>
                    <Col md={3}>
                        {data.slice(6,9).map((item, index) => {
                            return(
                                <p><span><MdDoubleArrow /></span>{item}</p>
                            );
                        })}
                    </Col>
                </Row>

                <Row className="footer_row_3">
                    <Col md={4}>
                        <h1 className="title_heading">Contact Us</h1>
                        {footer_contact.map((item, index) => {
                            return(
                                <div className="footer_contact_row">
                                    <span><img className="footer_contact_image" src={item.image} alt="footer_contact" /></span>
                                    <span><p>{item.title}</p></span>
                                </div>
                            );
                        })}
                    </Col>
                    <Col md={2}>
                        <h1 className="title_heading">Social Links</h1>
                        {footer_social_icon.map((item, index) => {
                            return(
                                <div className="social_icons_row">
                                    <span><img className="social_icons" src={item.image} alt="social_icons" /></span>
                                </div>
                            )
                        })}
                    </Col>
                    <Col md={6}>
                        <Row className="download_app">
                            <Col md={5}><h1>Download Our App</h1></Col>
                            <Col md={3}><img className="play_store_footer" src={play_store_footer} alt="play_store_footer" /></Col>
                            <Col md={3}><img className="apple_footer" src={apple_footer} alt="apple_footer" /></Col>
                        </Row>
                    </Col>
                </Row>
                <p className="copy_rights">&copy; Copyright TM 2021. All rights reserved. Created by Golden Infotech.</p>
            <img className="Vector_9" src={Vector_9} alt="Vector_9" />
            </div>
        </Container>
)
}

export default Footer
