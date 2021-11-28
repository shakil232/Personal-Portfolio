import React from 'react';
import './Project.css'
import Route from '../../../images/Reactp.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';

const Project = () => {

    return (
        <section className=" container text-white  mt-5 mb-5 pt-5">
            <div className="row d-flex">
                <div className="col-md-7">
                    <div className="section-title ">
                        <h1 className="h2">
                            <span className="text-green"> <span className="works-text">Some Of</span> My Works</span>

                        </h1>

                    </div>

                </div>
            </div>
            <div className="my-4">
                <div className="project-featured d-flex align-content-center my-4 row">
                    <div className="col-md-7" >
                        <div className="project-img">
                            <img src={Route} className="img img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="project-info px-4 py-1  pt-2 rounded " style={{ backgroundColor: "rgb(23,42,69" }}>
                            <p className="text-green small m-0">01</p>
                            <h3> Red Onion Foods</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</p>
                            <div className="d-flex technology">
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap4</span>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="my-4">
                <div className="project-featured d-flex align-content-center my-4 row">
                    <div className="col-md-7" >
                        <div className="project-img">
                            <img src={Route} className="img img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="project-info px-4 py-1  pt-2 rounded " style={{ backgroundColor: "rgb(23,42,69" }}>
                            <p className="text-green small m-0">01</p>
                            <h3> Red Onion Foods</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</p>
                            <div className="d-flex technology">
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap4</span>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="my-4">
                <div className="project-featured d-flex align-content-center my-4 row">
                    <div className="col-md-7" >
                        <div className="project-img">
                            <img src={Route} className="img img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="project-info px-4 py-1  pt-2 rounded " style={{ backgroundColor: "rgb(23,42,69" }}>
                            <p className="text-green small m-0">01</p>
                            <h3> Red Onion Foods</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</p>
                            <div className="d-flex technology">
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap4</span>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="action text-center">
                <Link className="details-link" to="/works">
                    <button type="button" className="work-btn">All Works</button>
                </Link>
            </div>


            {/* Swiper */}

            {/* <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            ...
           </Swiper> */}
        </section>
    );
};

export default Project;