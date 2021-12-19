import React from 'react';
import './ProvideService.css';
import PsdToHtml from '../../../images/serviceImg/ps-to-html.jpg';
import FrontEnd from '../../../images/serviceImg/front-end-developer.jpg';
import MrenStack from '../../../images/serviceImg/mern-stack.jpg';
import WebDesign from '../../../images/serviceImg/wev-design.jpg';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, { Autoplay, Navigation} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation]);

const ProvideService = () => {


    return (
        <section className="container mt-4 pt-4">
            {/* ProvideService-section */}
            <div className="section-header-underline mb-5">
                <h4>
                    <span className="text-white"> <span className="title-text">THOSE SERVICE </span>I PROVIDE </span>
                </h4>
            </div>

            {/* Swiper-Slider-Start */}
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true} 
                centeredSlides={true} 
                navigation={true} 
                autoplay={{
                    "delay": 3500,
                    "disableOnInteraction": false
                  }} 
                breakpoints={{
                    "640": {
                        "slidesPerView": 1,
                        "spaceBetween": 20
                    },
                    "768": {
                        "slidesPerView": 2,
                        "spaceBetween": 40
                    },
                    "1024": {
                        "slidesPerView": 3,
                        "spaceBetween": 40
                    }
                }} className="mySwiper" >

                {/* PSD to HTML */}
                <SwiperSlide>

                    <div className="card border-0 text-white  rounded-3 card-hover-custom bg-dark">
                        <div className="inner">
                            <img src={PsdToHtml} className="card-img-top img-fluid" alt="PsdToHtml" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                PSD To HTML
                            </h5>
                            <p className="card-text ">I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works in portfolio tab in this website.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>

                {/* Front-End-Web-Developer */}
                <SwiperSlide>

                    <div className="card border-0 text-white  rounded-3 card-hover-custom bg-dark">
                        <div className="inner">
                            <img src={FrontEnd} className="card-img-top img-fluid" alt="FrontEnd" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Front-end Web-Developing
                            </h5>
                            <p className="card-text">I am expert in Front-end web-design and development. I can add functionality besides designing and developed a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below.
                            </p>
                        </div>
                    </div>

                </SwiperSlide>

                {/* MERN Stack Web Development */}
                <SwiperSlide>

                    <div className="card border-0 text-white rounded-3 card-hover-custom bg-dark">
                        <div className="inner">
                            <img src={MrenStack} className="card-img-top img-fluid" alt="MrenStack" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                MERN Stack Web-Development
                            </h5>
                            <p className="card-text">I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work.
                            </p>
                        </div>
                    </div>
                    
                </SwiperSlide>

                 {/* Web-Design-Developer */}
                 <SwiperSlide>
                    <div className="card border-0 text-white  rounded-3 card-hover-custom bg-dark">
                        <div className="inner">
                            <img src={WebDesign} className="card-img-top img-fluid" alt="WebDesign" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                Web Design and Developer
                            </h5>
                            <p className="card-text">I am expert in web-design. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default ProvideService;