import React, { useEffect } from 'react';
import './AboutDetails.css'
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
import { Container } from 'react-bootstrap';
// Aos-Document
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutDetails = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="about-background">
            {/* nav */}
            <NavBar />

            <Container className="mt-3">
                <main className="row pb-4"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                >
                    {/* leftArea */}
                    <div className="col-md-6 mt-3 px-3" >

                        {/* Profile-Image */}
                        <div className=" w-50 m-auto pb-3">
                            <img src="https://i.ibb.co/kQp2Mgh/profile-1.png" alt="profile-img-2" className="img-fluid " />
                        </div>

                        {/* Profile-Details */}
                        <div className="pe-4">
                            <h4 className="text-white mt-3">
                                <small className="head-text me-2 mb-3 fs-4">I'm</small>
                                Mohammad Shakil Ahmed
                            </h4>
                            <small className="text-justify header-about text-white fs-6"> I am a MERN-Stack WEB Developer. I am working with React, Node.js, and MongoDB. I also have experience in developing static websites using HTML5, CSS3, and JavaScript (ES6). I am a quick learner. I believe in hard work and efficiency. That's why I am always ready to accomplish any task by working hard. I am always ready to learn any technology or language. I am sincere about my work to achieve my goals anyway. </small>
                        </div>

                    </div>

                    {/* rightArea */}
                    <div className="col-md-6">
                        <div className="my-5">
                            <h4 className="page-title mb-4 mt-3 text-white">My Skills Set</h4>
                            <div className="technology d-flex">
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap</span>
                                <span>React Bootstrap</span>
                                <span>MAterial UI</span>
                                <span>Tailwind</span>
                                <span>SASS</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>Font Awesome</span>
                                <span>React Router</span>
                                <span>Netlify</span>
                                <span>HeroKu</span>
                                <span>Github</span>
                                <span>VS Code</span>
                                <span>Chrome Dev Tool</span>
                                <span>Npm</span>

                            </div>

                            <h4 className="page-title mb-4 mt-4 text-white">
                                I want to work with
                            </h4>
                            <div className="technology d-flex">
                                <span>JavaScript</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                            </div>

                            <h4 className="page-title mt-4 text-white">
                                I also Familiar
                            </h4>
                            <div className="technology d-flex">
                                <span>TypeScript </span>
                                <span>Redux</span>
                                <span>Stripe</span>
                                <span>Google Map</span>
                            </div>
                        </div>
                    </div>
                </main>

            </Container>

            {/* footer */}
            <Footer />
        </section>
    );
};

export default AboutDetails;