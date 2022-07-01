import React, { useRef } from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import swal from 'sweetalert'
import emailjs from 'emailjs-com'
import './ContactDetails.css'


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

    return (

        <section className="contact-background ">
            {/* nav */}
            <NavBar />
            <Container>
                <Form style={{ backgroundColor: "#172a45" }} className="mt-3 p-3" ref={form} onSubmit={sendEmail} >
                    <h4 className="text-center text-white">Get In Touch</h4>
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
            <FooterDifferent />
        </section>
    );
};

export default ContactDetails;