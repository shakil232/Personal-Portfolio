import React from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PsdToHtml from '../../../images/serviceImg/ps-to-html.jpg'
// tippy-all-imports
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import tippy from 'tippy.js';
// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);



const Project = () => {


    return (
        <section className=" container text-white  mt-5 mb-5 pt-5">
            {/* Project-header-section */}
            <div className="section-header-underline mb-5">
                <h4>
                    <span className="text-white"> <span className="title-text">SOME OF </span>MY WORKS</span>
                </h4>
            </div>

            {/* 1st-Project */}
            <div className=" row my-4 px-2 project-featured ">
                {/* 1st-card */}
                <div className="col-md-7" >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            "delay": 3500,
                            "disableOnInteraction": false
                        }}
                        breakpoints={{
                            "640": {
                                "slidesPerView": 1,

                            },
                            "768": {
                                "slidesPerView": 1,

                            },
                            "1024": {
                                "slidesPerView": 1,

                            }
                        }} className="mySwiper" >

                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

                {/* 2nd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">01</p>
                        <h4> Red Onion Foods</h4>
                        <small className="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Firebase</span>
                            <span>Bootstrap4</span>
                        </div>

                        {/* Link-Area */}
                        <div className="mt-4 pb-2 d-flex">
                            <Tippy
                                content={<span className="text-warning">Go Code Repository</span>}
                                placement="left-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="#">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </Tippy>

                            <Tippy
                                content={<span className="text-warning ">Go Site Live</span>}
                                placement="right-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="#">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>


            {/* 2nd-Project */}
            <div className=" row my-4 px-2 project-featured ">
                {/* 1st-card */}
                <div className="col-md-7" >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            "delay": 3500,
                            "disableOnInteraction": false
                        }}
                        breakpoints={{
                            "640": {
                                "slidesPerView": 1,

                            },
                            "768": {
                                "slidesPerView": 1,

                            },
                            "1024": {
                                "slidesPerView": 1,

                            }
                        }} className="mySwiper" >

                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

                {/* 2nd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">01</p>
                        <h4> Red Onion Foods</h4>
                        <small className="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Firebase</span>
                            <span>Bootstrap4</span>
                        </div>

                        {/* Link-Area */}
                        <div className="mt-4 pb-2 d-flex">
                            <Tippy
                                content={<span className="text-warning">Go Code Repository</span>}
                                placement="left-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="#">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </Tippy>

                            <Tippy
                                content={<span className="text-warning ">Go Site Live</span>}
                                placement="right-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="#">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>


            {/* 3rd-Project */}
            <div className=" row my-4 px-2 project-featured ">
                {/* 1st-card */}
                <div className="col-md-7" >
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{
                            "delay": 3500,
                            "disableOnInteraction": false
                        }}
                        breakpoints={{
                            "640": {
                                "slidesPerView": 1,

                            },
                            "768": {
                                "slidesPerView": 1,

                            },
                            "1024": {
                                "slidesPerView": 1,

                            }
                        }} className="mySwiper" >

                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>


                {/* 3rd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">01</p>
                        <h4> Red Onion Foods</h4>
                        <small className="small text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>React.js</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>MongoDB</span>
                            <span>Firebase</span>
                            <span>Bootstrap4</span>
                        </div>

                        {/* Link-Area */}
                        <div className="mt-4 pb-2 d-flex">
                            <Tippy
                                content={<span className="text-warning">Go Code Repository</span>}
                                placement="left-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="#">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </Tippy>

                            <Tippy
                                content={<span className="text-warning ">Go Site Live</span>}
                                placement="right-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="#">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                </a>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>



            {/* All-Project-Btn */}
            <div className="action text-center pb-5">
                <Link to="/works">
                    <button type="button" className="btn-common btn-common-2">All Works</button>
                </Link>
            </div>

        </section>
    );
};

export default Project;