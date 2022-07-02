import React, { useEffect, useRef } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
//front-Awesome-all-imports;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarked } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert'
import emailjs from 'emailjs-com'
import './ContactDetails.css'
// Aos-Document
import AOS from 'aos';
import 'aos/dist/aos.css';



const ContactDetails = () => {
    const form = useRef();

    // email-handler 
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nhbak95', 'template_8f87f6g', form.current, 'user_tbFNuorI3og0UJCyvUeAH')
            .then(res => {
                swal({
                    title: "Your Message Send Successfully",
                    text: "Thank You",
                    icon: "success",
                    button: "ok",
                });

            },
                (error) => {
                    swal({
                        title: `${error.text}`,
                        text: "Sorry! Try Again",
                        icon: "error",
                        button: "ok",
                    });
                });

        e.target.reset()
    };

    useEffect(() => {
        AOS.init();
    }, [])

    return (

        <section className="contact-background ">
            {/* nav */}
            <NavBar />
            <Container className="mt-3"
             data-aos="fade-up"
             data-aos-duration="1500"
             >
                <div className='text-center'>
                    <h4 className=" text-white">Get In Touch</h4>
                </div>
                <div className='mt-4'>
                    <Row className="g-3 p-3" >
                        <Col md={4} sm={12} className="pb-5 text-center">
                            <FontAwesomeIcon className='text-info fs-1' icon={faPhoneAlt} />
                            <h5 className='text-white mt-3'>Call Me</h5>
                            <a className='text-white text-decoration-none' href="tel: +8801718160232">+8801718160232</a>
                        </Col>

                        <Col md={4} sm={12} className="pb-5 text-center">
                            <FontAwesomeIcon className='text-info fs-1' icon={faMapMarked} />
                            <h5 className='text-white mt-3'>Location</h5>
                            <a className='text-white text-decoration-none' href="https://www.google.com/maps/place/Shat+Tara+Jame+Masjid/@23.8039551,90.3688594,17z/data=!4m5!3m4!1s0x3755c0d140b3b33b:0x7d288628ac40e226!8m2!3d23.8033805!4d90.3690328" target="_blank" rel="noreferrer" > Mirpur-10, Dhaka</a>
                        </Col>

                        <Col md={4} sm={12} className="pb-5 text-center">
                            <FontAwesomeIcon className='text-info fs-1' icon={faEnvelope} />
                            <h5 className='text-white mt-3'>Email</h5>
                            <a className='text-white text-decoration-none' href="https://mail.google.com/mail/u/0/?fs=1&to=azharbinshakil@gmail.com&tf=cm" target="_blank" rel="noreferrer">azharbinshakil@gmail.com</a>
                        </Col>
                    </Row>

                </div>


                <Form style={{ backgroundColor: "#172a45" }} className="mt-3 p-3" ref={form} onSubmit={sendEmail} >

                    <Row className="g-3 p-3">
                        <Col className="mx-auto" sm={12} md={6} >
                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Your name" >
                                <Form.Control type="text" name="user_name" placeholder="Your name" required />
                            </FloatingLabel>

                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Email address" >
                                <Form.Control type="email" name="user_email" placeholder="Email address" required />
                            </FloatingLabel>

                            <FloatingLabel className=" mb-2" controlId="floatingInput" label="Subject" >
                                <Form.Control type="text" name="subject" placeholder="Subject" required />
                            </FloatingLabel>

                            <FloatingLabel className="mb-2" controlId="floatingTextarea2" label="Message">
                                <Form.Control type="text" name="message" as="textarea" placeholder="Message" style={{ height: '100px' }} required />
                            </FloatingLabel>

                            <Button className='form-control my-3 btn-success border-0 rounded-3' type="submit" >
                                Say Hello
                            </Button>
                        </Col>
                    </Row>

                </Form>

            </Container>
            {/* footer */}
            <Footer />
        </section>
    );
};

export default ContactDetails;