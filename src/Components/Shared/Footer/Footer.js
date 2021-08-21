import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="mt-4 pt-4 footer text-center">
            <small className="text-white"> All Copyright <small>&copy;</small> 2021 | <a className="git-link" target="_blank" href="https://github.com/shakil232"> Mohammad Shakil Ahmed</a> </small>
            <br />
            <small className="text-white">Dhaka,Bangladesh</small>

            <div className="a-social-bar">
                <a className="social-A-icon" target="_blank" href="https://www.linkedin.com/in/mohammad-shakil-ahmed-520aa8202/"><FontAwesomeIcon icon={faLinkedin} /></a>

                <a className="social-A-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>

                <a className="social-A-icon" href="x"><FontAwesomeIcon icon={faEnvelope} /></a>

                <a className="social-A-icon" target="_blank" href="https://www.facebook.com/mohammadshakil.ahmed.733/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
            </div>
        </div>
    );
};

export default Footer;