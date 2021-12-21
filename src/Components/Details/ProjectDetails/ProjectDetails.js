import React, { useEffect } from 'react';
import './ProjectDetails.css';
import NavBar from '../../Shared/NavBar/NavBar';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent'
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
// project-img-imports
import Industrial from '../../../images/projects/All-Project-img/industrial.png';
import FoodRestaurant from '../../../images/projects/All-Project-img/food-restaurant-hero.png';
import AutoCar from '../../../images/projects/All-Project-img/auto-car-hero.png';
import PandaCommerce from '../../../images/projects/All-Project-img/PandaCommerceHero.png';
import PenguinHero from '../../../images/projects/All-Project-img/penguinHero.png';
import PersonalWeb from '../../../images/projects/All-Project-img/Personal-hero.png';
import TravelHero from '../../../images/projects/All-Project-img/travelhero.png';
import PowerGymHouse from '../../../images/projects/All-Project-img/powerGymHouse.png';



// Aos-init
const ProjectDetails = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (

        <section className="project-background container">
            {/* navbar */}
            <NavBar />

            {/* All-project */}
            <main className="mb-5 mt-2">
                <h3 className="project-title text-white mb-5"> MY WORKS</h3>

                {/* project-Card-Start */}

                {/* 1st-3Cards */}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3 ">

                    {/* Industrial Construction */}
                    <div className="col pb-5">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                            data-aos="zoom-in-right"
                            data-aos-duration="2000">
                            <div className="inner">
                                <img src={Industrial} className="card-img-top img-fluid" alt="javaScript" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Industrial Construction
                                </h5>
                                <p className="card-text">A simple , static and Responsive one page Industrial Construction website design . It is a PSD to HTML conversion .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/Industrial-Construction-Landing-Page-">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/Industrial-Construction-Landing-Page-/">
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
                                <img src={AutoCar} className="card-img-top img-fluid" alt="javaScript" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Auto Car
                                </h5>
                                <p className="card-text">A simple , static and  one page Auto Car website design . It is a PSD to HTML conversion .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/Auto-Car-Landing-Page">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/Auto-Car-Landing-Page/">
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
                                <img src={FoodRestaurant} className="card-img-top img-fluid" alt="javaScript" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Food-Restaurant
                                </h5>
                                <p className="card-text">A simple , static and Responsive one page Food-Restaurant website design . It is a PSD to HTML conversion .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/Food-Restaurant-Bootstrap">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/Food-Restaurant-Bootstrap/index.html">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd-3Cards */}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3 ">

                    {/* Travel Agency */}
                    <div className="col pb-5">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                            data-aos="zoom-in-right"
                            data-aos-duration="2000">
                            <div className="inner">
                                <img src={TravelHero} className="card-img-top img-fluid" alt="TravelHero" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Travel Agency
                                </h5>
                                <p className="card-text">A simple , static and Responsive one page Travel Agency website design . It is a Figma to HTML conversion .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/Travel-Agency-Landing-Page">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/Travel-Agency-Landing-Page/">
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
                                <img src={PenguinHero} className="card-img-top img-fluid" alt="PenguinHero" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Penguin-Fashion
                                </h5>
                                <p className="card-text">A simple , static and  one page Penguin-Fashion E-commerce website design . It is a XD to HTML conversion .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/Penguin-Fashion">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/Penguin-Fashion/">
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
                                <img src={PowerGymHouse} className="card-img-top img-fluid" alt="PowerGymHouse" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Power Gym House
                                </h5>
                                <p className="card-text">A simple , static and Responsive one page Power Gym House website design . It is a PSD to HTML conversion .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/Body-Building-Home-Page">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/Body-Building-Home-Page/">
                                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                                        </a>
                                    </Tippy>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* 3rd-3Cards */}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3 ">

                    {/* Panda Commerce*/}
                    <div className="col pb-5">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white"
                            data-aos="zoom-in-right"
                            data-aos-duration="2000">
                            <div className="inner">
                                <img src={PandaCommerce} className="card-img-top img-fluid" alt="PandaCommerce" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Panda Commerce
                                </h5>
                                <p className="card-text">A simple ,Landing one page Panda e-Commerce website design . It is a XD to HTML conversion .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/panda-commerce-bootstrap">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/panda-commerce-bootstrap/">
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
                                <img src={PersonalWeb} className="card-img-top img-fluid" alt="PersonalWeb" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-warning">
                                    Personal Website
                                </h5>
                                <p className="card-text">This is a simplest one page portfolio website design without any framework/libraries or any third party plugins .
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
                                        content={<span className="text-warning">Go Code Repository</span>}
                                        placement="top-start"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://github.com/shakil232/Personal-Website">
                                            <FontAwesomeIcon icon={faGithub} />
                                        </a>
                                    </Tippy>

                                    <Tippy
                                        content={<span className="text-warning ">Go Live View</span>}
                                        placement="top"
                                        animation="scale"
                                        delay={300}
                                    >
                                        <a className="project-icon" target="_blank" href="https://shakil232.github.io/Personal-Website/">
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
            <FooterDifferent />

        </section>
    );
};

export default ProjectDetails;