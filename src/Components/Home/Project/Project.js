import React from 'react';
import './Project.css'
import { Link } from 'react-router-dom';
// frontAwesome-all-imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// allProjects-Img
import Industrial from '../../../images/projects/industrial/industrial.png'
import IndustrialTwo from '../../../images/projects/industrial/industrial-2.png'
import IndustrialRes from '../../../images/projects/industrial/Industrial-responsive.PNG'
import AutoCar from '../../../images/projects/AutoCar/auto-car-hero.png'
import AutoCarTwo from '../../../images/projects/AutoCar/Auto-Car-2.png'
import AutoCarRes from '../../../images/projects/AutoCar/auto-responsive.png'
import FoodHero from '../../../images/projects/FoodRestaurant/food-restaurant-hero.png'
import FoodTwo from '../../../images/projects/FoodRestaurant/food-restaurant-2.png'
import FoodRes from '../../../images/projects/FoodRestaurant/foodicted-responsive.png'
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
                                <img src={Industrial} className="card-img-top img-fluid" alt="Industrial" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={IndustrialTwo} className="card-img-top img-fluid" alt="IndustrialTwo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={IndustrialRes} className="card-img-top img-fluid" alt="IndustrialRes" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

                {/* 2nd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">01</p>
                        <h4 className="text-warning"> Industrial Construction</h4>
                        <small className="small text-white">A simple , static and Responsive one page Industrial Construction website design . It is a PSD to HTML conversion .</small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Bootstrap5</span>
                            <span>JavaScript</span>
                        </div>

                        {/* Link-Area */}
                        <div className="mt-4 pb-2 d-flex">
                            <Tippy
                                content={<span className="text-warning">Go Code Repository</span>}
                                placement="left-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232/Industrial-Construction-Landing-Page-">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </Tippy>

                            <Tippy
                                content={<span className="text-warning ">Go Site Live</span>}
                                placement="right-start"
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
                                <img src={AutoCar} className="card-img-top img-fluid" alt="AutoCar" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={AutoCarTwo} className="card-img-top img-fluid" alt="AutoCarTwo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={AutoCarRes} className="card-img-top img-fluid" alt="AutoCarRes" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>

                {/* 2nd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">02</p>
                        <h4 className="text-warning"> Auto Car</h4>
                        <small className="small text-white">A simple , static and Landing one page Auto Car website design . It is a PSD to HTML conversion .</small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Bootstrap5</span>
                        </div>

                        {/* Link-Area */}
                        <div className="mt-4 pb-2 d-flex">
                            <Tippy
                                content={<span className="text-warning">Go Code Repository</span>}
                                placement="left-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232/Auto-Car-Landing-Page">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </Tippy>

                            <Tippy
                                content={<span className="text-warning ">Go Site Live</span>}
                                placement="right-start"
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
                                <img src={FoodHero} className="card-img-top img-fluid" alt="FoodHero" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={FoodTwo} className="card-img-top img-fluid" alt="FoodTwo" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={FoodRes} className="card-img-top img-fluid" alt="FoodRes" />
                            </div>
                        </SwiperSlide>

                    </Swiper>

                </div>


                {/* 3rd-card */}
                <div className="col-md-5">
                    <div className="project-info px-5 py-1 pt-2 rounded ">
                        <p className=" small m-0 pb-2">03</p>
                        <h4 className="text-warning"> Food-Restaurant</h4>
                        <small className="small text-white">A simple , static and Landing one page Food-Restaurant website design . It is a PSD to HTML conversion .
                        </small>
                        <div className=" technology d-flex flex-wrap mt-3">
                            <span>HTML5</span>
                            <span>CSS3</span>
                            <span>Bootstrap5</span>
                        </div>

                        {/* Link-Area */}
                        <div className="mt-4 pb-2 d-flex">
                            <Tippy
                                content={<span className="text-warning">Go Code Repository</span>}
                                placement="left-start"
                                animation="scale"
                                delay={300}
                            >
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232/Food-Restaurant-Bootstrap">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </Tippy>

                            <Tippy
                                content={<span className="text-warning ">Go Site Live</span>}
                                placement="right-start"
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