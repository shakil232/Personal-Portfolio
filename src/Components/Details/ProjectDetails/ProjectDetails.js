import React, { useEffect } from 'react';
import './ProjectDetails.css';
import NavBar from '../../Shared/NavBar/NavBar';
import Footer from '../../Shared/Footer/Footer';
//front-Awesome-all-imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// tippy-all-imports
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
// Aos-Document
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';



const ProjectDetails = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])

    return (

        <section className="project-background ">
            {/* navbar */}
            <NavBar />

            <Container className="mt-3">
                {/* All-project */}
                <main className="mb-5 mt-2">
                    <h3 className="project-title text-white mb-5"> MY WORKS</h3>

                    {/* project-Card-Start */}

                    {/* 1st-2ndCards */}
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-3 ">

                        {/* Dental Clinic*/}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="zoom-in-right"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src="https://i.ibb.co/jzQNLt9/dental-clinic-heo.png" className="card-img-top img-fluid" alt="dental-clinic" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Dental Clinic
                                    </h5>
                                    <p className="card-text">A full-stack single-page dental-clinic web app. Login system with firebase and private routes. Users can Appointment and see their Appointment records on the Checkout page. Admin panel, where admin can do CRUD operations
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>React.js</span>
                                            <span>React Router</span>
                                            <span>Firebase</span>
                                            <span>Bootstrap5</span>
                                            <span>Node.js</span>
                                            <span>Express.js</span>
                                            <span>Mongodb</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-4 pb-2 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="left-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Modern-Dental-Clinic-Client">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="right-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://modern-dental-clinic-mdc23.web.app/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*  Urban Rider */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src="https://i.ibb.co/dDDJt7k/urban-rider.png" className="card-img-top img-fluid" alt="Urban-Rider" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Urban Rider
                                    </h5>
                                    <p className="card-text">A single-page online ride-sharing web app with firebase login system. The website is built with React, Firebase, React-Router, and React-Bootstrap.
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>React.js</span>
                                            <span>React Router</span>
                                            <span>Firebase</span>
                                            <span>Bootstrap5</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-4 pb-2 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="left-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Urban-Rider">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View </span>}
                                            placement="right-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://urban-rider-ur12.web.app/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* hungry-monster */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="zoom-in-left"
                                data-aos-duration="2000" >
                                <div className="inner">
                                    <img src="https://i.ibb.co/B2JCwds/hungry-monster-hero.png" className="card-img-top img-fluid" alt="HungryMonster" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Hungry Monster
                                    </h5>
                                    <p className="card-text">  Hungry-Monster is a single-page online food order website. it is a simple react-router application. The website dynamically changes the route with the URL.The website is built with React, React-Router and React-Bootstrap And has been used an API called (The Meal DB).
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>React.js</span>
                                            <span>React Router</span>
                                            <span>TheMealDB Api</span>
                                            <span>Bootstrap5</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-4 pb-2 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="left-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Hungry-Monster">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View </span>}
                                            placement="right-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://hungry-monster01.netlify.app/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2nd-3rdCard  */}
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-3 ">

                        {/* Industrial Construction */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="zoom-in-right"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src="https://i.ibb.co/NCCNfns/industrial.png" className="card-img-top img-fluid" alt="javaScript" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Industrial Construction
                                    </h5>
                                    <p className="card-text">
                                        A simple, static, and Responsive one-page Industrial Construction website design. It is a PSD to HTML conversion.
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                            <span>Bootstrap5</span>
                                            <span>JavaScript</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Industrial-Construction-Landing-Page-">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/Industrial-Construction-Landing-Page-/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Auto Car */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src="https://i.ibb.co/nRycfn7/auto-car-hero.png" className="card-img-top img-fluid" alt="javaScript" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Auto Car
                                    </h5>
                                    <p className="card-text">
                                        A simple, static, and one-page Auto Car website design. It is a PSD to HTML conversion.
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                            <span>Bootstrap5</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Auto-Car-Landing-Page">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/Auto-Car-Landing-Page/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Food-Restaurant */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="zoom-in-left"
                                data-aos-duration="2000" >
                                <div className="inner">
                                    <img src="https://i.ibb.co/c2nyGmL/food-restaurant-hero.png" className="card-img-top img-fluid" alt="javaScript" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Food-Restaurant
                                    </h5>
                                    <p className="card-text">
                                        A simple, static, and Responsive one-page Food-Restaurant website design. It is a PSD to HTML conversion .
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                            <span>Bootstrap5</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Food-Restaurant-Bootstrap">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/Food-Restaurant-Bootstrap/index.html">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3rd-4thCards */}
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-3 ">

                        {/* Travel Agency */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="zoom-in-right"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src="https://i.ibb.co/ZT0P317/travelhero.png" className="card-img-top img-fluid" alt="TravelHero" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Travel Agency
                                    </h5>
                                    <p className="card-text">
                                        A simple, static, and Responsive one-page Travel Agency website design. It is a Figma to HTML conversion.
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Travel-Agency-Landing-Page">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/Travel-Agency-Landing-Page/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Penguin-Fashion */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src='https://i.ibb.co/kcHVRLM/penguin-Hero.png' className="card-img-top img-fluid" alt="PenguinHero" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Penguin-Fashion
                                    </h5>
                                    <p className="card-text">
                                        A simple, static, and one-page Penguin-Fashion E-commerce website design. It is an XD to HTML conversion .
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                            <span>Bootstrap5</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Penguin-Fashion">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/Penguin-Fashion/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Power Gym House*/}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="zoom-in-left"
                                data-aos-duration="2000" >
                                <div className="inner">
                                    <img src="https://i.ibb.co/d2qynXJ/power-Gym-House.png" className="card-img-top img-fluid" alt="PowerGymHouse" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Power Gym House
                                    </h5>
                                    <p className="card-text">
                                        A simple, static, and Responsive one-page Power Gym House website design. It is a PSD to HTML conversion.
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                            <span>Bootstrap5</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Body-Building-Home-Page">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/Body-Building-Home-Page/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 5th-6thCards */}
                    <div className="row row-cols-1 row-cols-md-3 g-4 px-3 ">

                        {/* Panda Commerce*/}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="zoom-in-right"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src="https://i.ibb.co/fFfKdfz/Panda-Commerce-Hero.png" className="card-img-top img-fluid" alt="PandaCommerce" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Panda Commerce
                                    </h5>
                                    <p className="card-text">
                                        A simple, Landing page Panda e-Commerce website design. It is an XD to HTML conversion .
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                            <span>Bootstrap5</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/panda-commerce-bootstrap">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/panda-commerce-bootstrap/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Personal Website */}
                        <div className="col pb-5">
                            <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <div className="inner">
                                    <img src="https://i.ibb.co/XDcMgZZ/Personal-hero.png" className="card-img-top img-fluid" alt="PersonalWeb" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning">
                                        Personal Website
                                    </h5>
                                    <p className="card-text">
                                        This is the simplest one-page portfolio website design without any framework/libraries or any third-party plugins .
                                    </p>
                                    {/* Technology-area */}
                                    <div className="d-flex align-content-center justify-content-between text-white">
                                        <div className="technology">
                                            <span>HTML5</span>
                                            <span>CSS3</span>
                                        </div>
                                    </div>

                                    {/* Links-Area */}
                                    <div className="mt-3 d-flex">
                                        <Tippy
                                            content={<span className="text-warning">Github Repository</span>}
                                            placement="top-start"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232/Personal-Website">
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        </Tippy>

                                        <Tippy
                                            content={<span className="text-warning ">Go Live View</span>}
                                            placement="top"
                                            animation="scale"
                                            delay={300}
                                        >
                                            <a className="project-icon" target="_blank" rel="noreferrer" href="https://shakil232.github.io/Personal-Website/">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </Tippy>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
                {/* footer */}
                <Footer />
            </Container>
        </section>
    );
};

export default ProjectDetails;