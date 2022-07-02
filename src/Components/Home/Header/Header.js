import React, { useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import Typical from 'react-typical'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
// Aos-Document
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Container className=" mt-5 pt-5 pb-5">
            <Row className="d-flex flex-column-reverse flex-md-row align-content-center justify-content-around">

                {/* Profile-Intro */}
                <Col md={7} sm={12}  className=" ps-4 "
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                >
                    <div className="hero-text">
                        <small className="" >Hello, I'm</small>
                        <h3 className="text-white"> Mohammad Shakil Ahmed </h3>
                    </div>
                    <div className="typeWrite">
                        <Typical
                            steps={[
                                'Programmer',1500,
                                'Front End Developer', 1500,
                                'React Developer', 1500,
                                'MERN Stack Developer', 1500,
                                
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>

                    <div>
                        <p className=" text-justify hero-about text-white pe-5 f"> I am a MERN-Stack WEB Developer. I am working with React, Node.js, and MongoDB. I also have experience in developing static websites using HTML5, CSS3, and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. I am always ready to learn any technology or language. I am sincere about my work to achieve my goals anyway. </p>
                    </div>

                    <div className="d-flex align-content-center mt-4">
                        <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mohammad-shakil-ahmed-520aa8202/"><FontAwesomeIcon icon={faLinkedin} /></a>

                        <a className="social-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>

                        <a className="social-icon" target="_blank" rel="noreferrer"  href="https://mail.google.com/mail/u/0/?fs=1&to=azharbinshakil@gmail.com&tf=cm"><FontAwesomeIcon icon={faEnvelope} /></a>

                        <a className="social-icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/mohammadshakil.ahmed.733/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    </div>

                    <div className="mt-4">
                        <Link to="/about">
                            <button className="btn-common about-btn "> About Me</button>
                        </Link>
                        <Link to="/contact">
                            <button className="btn-common contact-btn ms-3"> Contact </button>
                        </Link>
                    </div>
                </Col>

                {/* Profile-Image */}
                <Col md={4} sm={12} className="mb-5 mx-auto "
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                >
                    <img src="https://i.ibb.co/kQp2Mgh/profile-1.png" alt="profile-img" className="img-fluid " />
                </Col>

            </Row>
        </Container>
    );
};

export default Header;