import React from 'react';
import './ProjectDetails.css';
import NavBar from '../../Shared/NavBar/NavBar';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import REACT from '../../../images/REACT.png';
import javaScript from '../../../images/javascript-summary.png';
import Router from '../../../images/Router.png';

const ProjectDetails = () => {
    return (

        <section className="project-background container">
            {/* navbar */}
            <NavBar />

            {/* All-project */}
            <main className="mb-5 mt-2">
                <h3 className="project-title text-white mb-5"> MY WORKS</h3>

                {/* project-Card-Start */}
                <div className="row row-cols-1 row-cols-md-3 g-4 px-3">

                    {/* javaScript */}
                    <div className="col pb-5">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white">
                            <div className="inner">
                                <img src={javaScript} className="card-img-top img-fluid" alt="javaScript" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Introduction To javaScript
                                </h5>
                                <p className="card-text">JavaScript is a single thread, prototype based programming  language that support multiple programming.
                                </p>
                                {/* Technology-area */}
                                <div className="d-flex align-content-center justify-content-between text-white">
                                    <div className="technology">
                                        <span>React.js</span>
                                        <span>Node.js</span>
                                        <span>Express.js</span>
                                        <span>MongoDB</span>
                                        <span>Firebase</span>
                                        <span>Bootstrap4</span>
                                    </div>
                                </div>

                                {/* Links-Area */}
                                <div className="card-footer  mt-2  d-flex align-content-center justify-content-center">
                                    <a className="project-icon" target="_blank" href="#">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>

                                    <a className="project-icon" target="_blank" href="#">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* REACT */}
                    <div className="col pb-5">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white">
                            <div className="inner">
                                <img src={REACT} className="card-img-top img-fluid" alt="javaScript" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Introduction To javaScript
                                </h5>
                                <p className="card-text">JavaScript is a single thread, prototype based programming  language that support multiple programming.
                                </p>
                                {/* Technology-area */}
                                <div className="d-flex align-content-center justify-content-between text-white">
                                    <div className="technology">
                                        <span>React.js</span>
                                        <span>Node.js</span>
                                        <span>Express.js</span>
                                        <span>MongoDB</span>
                                        <span>Firebase</span>
                                        <span>Bootstrap4</span>
                                    </div>
                                </div>

                                {/* Links-Area */}
                                <div className="card-footer  mt-2  d-flex align-content-center justify-content-center">
                                    <a className="project-icon" target="_blank" href="#">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>

                                    <a className="project-icon" target="_blank" href="#">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Router */}
                    <div className="col pb-5">
                        <div className="card border-0  rounded-3 card-hover-custom bg-dark text-white">
                            <div className="inner">
                                <img src={Router} className="card-img-top img-fluid" alt="javaScript" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Introduction To javaScript
                                </h5>
                                <p className="card-text">JavaScript is a single thread, prototype based programming  language that support multiple programming.
                                </p>
                                {/* Technology-area */}
                                <div className="d-flex align-content-center justify-content-between text-white">
                                    <div className="technology">
                                        <span>React.js</span>
                                        <span>Node.js</span>
                                        <span>Express.js</span>
                                        <span>MongoDB</span>
                                        <span>Firebase</span>
                                        <span>Bootstrap4</span>
                                    </div>
                                </div>

                                {/* Links-Area */}
                                <div className="card-footer  mt-2  d-flex align-content-center justify-content-center">
                                    <a className="project-icon" target="_blank" href="#">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>

                                    <a className="project-icon" target="_blank" href="#">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
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