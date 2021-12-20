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
import Industrial from '../../../images/projects/industrial/industrial.png';
import FoodRestaurant  from '../../../images/projects/FoodRestaurant/food-restaurant-hero.png';
import AutoCar from '../../../images/projects/AutoCar/auto-car-hero.png';



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
                                <p className="card-text">A simple , static and Landing one page Auto Car website design . It is a PSD to HTML conversion .
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
                                <p className="card-text">A simple , static and Landing one page Food-Restaurant website design . It is a PSD to HTML conversion .
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
            </main>



            {/* footer */}
            <FooterDifferent />

        </section>
    );
};

export default ProjectDetails;