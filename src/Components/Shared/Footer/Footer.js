import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faGithub, } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <section className=" container mt-5 pt-5">
            <main className=" footer text-center">
                <small className="text-white "> Designed & Built by
                    <a className="link-git mx-1 text-decoration-none" target="_blank" href="https://github.com/   shakil232">
                        Mohammad Shakil Ahmed
                    </a> 
                </small>

                {/* footer-text-area */}
                <div className="mt-2">
                    <small className="text-white mr-2 ">
                        <FontAwesomeIcon icon={faStar} /> Star
                    </small>

                    <small className="text-white ml-1 ">&</small>

                    <small className="text-white ml-3 ">
                        <FontAwesomeIcon icon={faCodeBranch} /> Froks
                    </small>


                    <a className="text-decoration-none " href="https://github.com/shakil232" target="_blank">
                        <small className="text-white ml-3 badge bg-success">  By Me </small>
                    </a>
                </div>

                {/* side-social-icons-area */}
                <div className="a-social-bar">
                    <a className="social-A-icon" target="_blank" href="https://www.linkedin.com/in/mohammad-shakil-ahmed-520aa8202/"><FontAwesomeIcon icon={faLinkedin} /></a>

                    <a className="social-A-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>

                    <a className="social-A-icon" href="x"><FontAwesomeIcon icon={faEnvelope} /></a>

                    <a className="social-A-icon" target="_blank" href="https://www.facebook.com/mohammadshakil.ahmed.733/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                </div>
            </main>
        </section>
    );
};

export default Footer;