import React from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
// frontAwesome-all-imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
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

            {/* Industrial Construction */}
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
                                <img src="https://i.ibb.co/jzQNLt9/dental-clinic-heo.png" className="card-img-top img-fluid" alt="dentalClinicHero" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/Z15PPBP/dental-clinic-log.png" className="card-img-top img-fluid" alt="dentalClinicLog" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/Fhkvd4f/moden-dental-2.png" className="card-img-top img-fluid" alt="dentalClinicDash" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/XpWNFxv/moden-dental-3.png" className="card-img-top img-fluid" alt="dentalClinicDash2" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

                {/* 2nd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">01</p>
                        <h4 className="text-warning"> Dental Clinic </h4>
                        <small className="small text-white">A full-stack single-page dental-clinic web app. Login system with firebase and private routes. Users can Appointment and see their Appointment records on the Checkout page. Admin panel, where admin can do CRUD operations.</small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>React.js</span>
                            <span>React Router</span>
                            <span>Firebase</span>
                            <span>Bootstrap5</span>
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>Mongodb</span>
                        </div>

                        {/* Link-Area */}
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


            {/* Auto Car*/}
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
                                <img src="https://i.ibb.co/dDDJt7k/urban-rider.png" className="card-img-top img-fluid" alt="urbanRiderHero" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/N2R4zDK/urban-rider-login.png" className="card-img-top img-fluid" alt="urbanRiderLog" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/K6R4BrK/urban-rider-mail.png" className="card-img-top img-fluid" alt="urbanRiderMail" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/4FSxVJc/urban-rider-des.png" className="card-img-top img-fluid" alt="urbanRiderDes" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

                {/* 2nd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">02</p>
                        <h4 className="text-warning"> Urban Rider </h4>
                        <small className="small text-white">A single-page online ride-sharing web app with firebase login system. The website is built with React, Firebase, React-Router, and React-Bootstrap.</small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>React.js</span>
                            <span>React Router</span>
                            <span>Firebase</span>
                            <span>Bootstrap5</span>
                        </div>

                        {/* Link-Area */}
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


            {/* Food-Restaurant */}
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
                                <img src="https://i.ibb.co/B2JCwds/hungry-monster-hero.png" className="card-img-top img-fluid" alt="hungryMonsterHero" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/N1DQSLV/hungry-monster-check.png" className="card-img-top img-fluid" alt="hungryMonsterCheck" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src="https://i.ibb.co/DfHC44J/hungry-monster-modal.png" className="card-img-top img-fluid" alt="hungryMonsterMod" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>


                {/* 3rd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">03</p>
                        <h4 className="text-warning"> Hungry Monster </h4>
                        <small className="small text-white">
                        Hungry-Monster is a single-page online food order website. it is a simple react-router application. The website dynamically changes the route with the URL.The website is built with React, React-Router and React-Bootstrap And has been used an API called (The Meal DB).
                        </small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>React.js</span>
                            <span>React Router</span>
                            <span>TheMealDB Api</span>
                            <span>Bootstrap5</span>
                        </div>

                        {/* Link-Area */}
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