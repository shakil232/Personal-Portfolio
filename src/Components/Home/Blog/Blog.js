import React, { useEffect } from 'react';
import './Blog.css';
import REACT from '../../../images/REACT.png'
import Router from '../../../images/Router.png'
import javaScript from '../../../images/javascript-summary.png'
import { Link } from 'react-router-dom';
// Aos-Document
import AOS from 'aos';
import 'aos/dist/aos.css';



const Blog = () => {
    useEffect(() => {
        AOS.init({
            offset: 100, 
            delay: 500, 
            duration: 1000, 
            easing: 'ease',
        });
    }, [])

    return (
        <section className="container  mt-4 pt-4">
            {/* Blog-header-section */}
            <div className="section-header-underline mb-5">
                <h3>
                    <span className="text-white"> <span className="title-text">SOME OF </span>MY BLOG</span>
                </h3>
            </div>

            {/* Blog-card-section */}
            <main className="row row-cols-1 row-cols-md-3 g-4 px-3">

                {/* javaScript */}
                <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/javascript-summary-a48033ba2ee5" target="_blank">
                    <div className="col pb-4">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark" data-aos="zoom-in-right">
                            <div className="inner">
                                <img src={javaScript} className="card-img-top img-fluid" alt="Router" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Introduction To javaScript
                                </h5>
                                <p className="card-text">JavaScript is a single thread, prototype based programming  language that support multiple programming.
                                </p>
                                <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                    <div className="technology">
                                        <span>JavaScript</span>
                                    </div>
                                    <div>
                                        <small>August 30 2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                {/* REACT */}
                <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/introduction-to-react-js-d39e1b00c443" target="_blank">
                    <div className="col pb-4">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark" data-aos="zoom-in-up">
                            <div className="inner">
                                <img src={REACT} className="card-img-top img-fluid" alt="Router" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Introduction To React
                                </h5>
                                <p className="card-text">React is a free and open-source front-end JavaScript library for building user interfaces or UI components...
                                </p>
                                <div className="card-footer d-flex align-content-center justify-content-between text-white">
                                    <div className="technology">
                                        <span>React.js</span>
                                    </div>
                                    <div>
                                        <small>May 07 2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Router */}
                <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/getting-started-with-react-router-64d052bbdc17" target="_blank">
                    <div className="col pb-4">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark" data-aos="zoom-in-left">
                            <div className="inner">
                                <img src={Router} className="card-img-top img-fluid" alt="Router" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Introduction React Route
                                </h5>
                                <p className="card-text">What you will know from this article : What is React Router, Install and configure React Router, Static Routing..
                                </p>
                                <div className="card-footer d-flex align-content-center justify-content-between  text-white">
                                    <div className="technology">
                                        <span>React Router</span>
                                    </div>
                                    <div >
                                        <small>August 31 2021</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>

            </main>


            {/* AllBlog-btn-section */}
            <div className="action text-center pb-5">
                <Link to="/blog">
                    <button type="button" className="btn-common btn-common-2">All Blogs</button>
                </Link>
            </div>
        </section>
    );
};

export default Blog;