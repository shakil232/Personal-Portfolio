import React from 'react';
import './Header.css'
import profile from '../../../images/profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = () => {
    return (
        <section className="mt-5 pt-3">
            <div className="d-flex row ">
                 {/* TextArea */}
                <div className="col-md-5 offset-1 col-sm-12 mb-5">

                    <div className="header-text">
                        <small >Hello, I'm</small>
                        <h3> Mohammad Shakil Ahmed </h3>
                    </div>

                    <div>
                        <ul className="d-flex header-list ">
                            <li  >Web Developer</li>
                            <li className="ml-5 "> Programmer</li>
                        </ul>
                    </div>
 
                    <div>
                       <small className="text-justify header-about text-white"> I am Mohammad Shakil Ahmed. I'm a Junior Front-End Mern Web-Developer. I'm interested in JavaScript-based software technologies. I always try to learn about new features and technologies. I am sincere about my work to achieve my goals anyway.</small>
                    </div>
                    <div className="d-flex  align-content-center mt-4">
                        <a className="social-icon" target="_blank"  href="https://www.linkedin.com/in/mohammad-shakil-ahmed-520aa8202/"><FontAwesomeIcon icon={faLinkedin} /></a>

                        <a className="social-icon" target="_blank"  href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>

                        <a className="social-icon"  href="x"><FontAwesomeIcon icon={faEnvelope} /></a>

                        <a className="social-icon" target="_blank" href="https://www.facebook.com/mohammadshakil.ahmed.733/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    </div>
                    <div className="mt-5">
                        <button className=" about-btn"> About Me</button>
                        <a to=""><button className="ml-3 resume-btn">Resume</button></a>

                    </div>
                </div>
                
                {/* ImageArea */}
                <div className="col-md-4 offset-1  col-sm-12 ">
                    <img src={profile} alt="profile-img" className="img-fluid max-width: 60%"/>
                </div>

            </div>
        </section>
    );
};

export default Header;