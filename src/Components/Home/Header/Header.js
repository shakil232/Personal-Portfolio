import React from 'react';
import './Header.css';
import profile from '../../../images/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons'
import Typical from 'react-typical'
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <section className="container mt-5 pt-5 pb-5">
            <main className=" row d-flex flex-column-reverse flex-md-row align-content-center justify-content-around">

                {/* Profile-Intro */}
                <div className="col-md-8 col-sm-12 pl-4 ">
                    <div className="hero-text">
                        <small className=" " >Hello, I'm</small>
                        <h3 className="text-white "> Mohammad Shakil Ahmed </h3>
                    </div>
                    <div className="typeWrite">
                        <Typical
                            steps={[
                                'Front End Developer', 1500,
                                'React Developer', 1500,
                                'Programmer',1500
                            ]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </div>

                    <div>
                        <p className=" text-justify hero-about text-white pr-5"> I am Mohammad Shakil Ahmed . I am a self-thought programmer . I try to develop the front end of a web application using React.js . I'm interested in JavaScript-based software technologies . I am always ready to learn any technology or language . I am sincere about my work to achieve my goals anyway .  </p>
                    </div>

                    <div className="d-flex align-content-center mt-4">
                        <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/mohammad-shakil-ahmed-520aa8202/"><FontAwesomeIcon icon={faLinkedin} /></a>

                        <a className="social-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>

                        <a className="social-icon" href="x"><FontAwesomeIcon icon={faEnvelope} /></a>

                        <a className="social-icon" target="_blank" href="https://www.facebook.com/mohammadshakil.ahmed.733/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    </div>

                    <div className="mt-4">
                        <Link to="/about">
                            <button className="btn-common about-btn "> About Me</button>
                        </Link>
                        <a target="_blank" href="https://docs.google.com/document/d/1UNBDxLCk9MdVdtD3XjQKot2gl2LBz-uBryrdGRheQYM/edit?usp=sharing"><button className="ml-3 btn-common resume-btn shadow-lg">Resume</button></a>

                    </div>
                </div>

                {/* Profile-Image */}
                <div className="col-md-4 mb-5 w-75 m-auto">
                    <img src={profile} alt="profile-img" className="img-fluid " />
                </div>

            </main>
        </section>
    );
};

export default Header;