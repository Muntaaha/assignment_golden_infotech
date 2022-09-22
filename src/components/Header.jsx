import React from 'react'
import Logo from '../assets/images/Logo.png'
import '../assets/scss/header.scss'
import { Nav } from "./index";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoEarthOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";

const Header = () => {
    return (
        <div className="header_area">
            <Container>
                <Row>
                    <Col md={2} sm={6} className="logo_area">
                        <img className="logo-image" src={Logo} alt="Logo" />
                        <span className="logo-text">TM</span>
                    </Col>

                    <Col md={8} className="d-none d-md-block"><Nav /></Col>
                    <Col md={1} className="d-none d-md-block">
                        <div className="lang_area">
                            <span className="item"><IoEarthOutline /></span>
                            <span className="text">En</span>
                            <span className="item"><RiArrowDownSLine /></span>
                        </div>
                    </Col>
                    <Col md={1} className="d-none d-md-block button_area">
                        <button>Login</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header
