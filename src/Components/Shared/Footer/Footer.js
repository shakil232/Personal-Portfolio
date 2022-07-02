import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebookSquare, faGithub, } from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
    return (
        <section className=" container mt-5 pt-4 pb-3">
        <div className="d-flex align-content-center justify-content-center mt-4">
            <a className="footer-icon" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mohammad-shakil-ahmed-520aa8202/"><FontAwesomeIcon icon={faLinkedin} /></a>

            <a className="footer-icon" target="_blank" rel="noreferrer" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>

            <a className="footer-icon" target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?fs=1&to=azharbinshakil@gmail.com&tf=cm"><FontAwesomeIcon icon={faEnvelope} /></a>

            <a className="footer-icon" target="_blank" rel="noreferrer" href="https://www.facebook.com/mohammadshakil.ahmed.733/"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        </div>
        <main className=" different-footer text-center">
            <p className="text-white"> Designed and Developed by
                <a className="link-git mx-1 text-decoration-none fs-6" target="_blank" rel="noreferrer" href="https://github.com/shakil232">
                    Mohammad Shakil Ahmed
                </a>
            </p>

            <p style={{marginTop: "-10px"}} className="text-white ">
                Copyright &copy; {(new Date()).getFullYear()}, All Rights Reserved
            </p>
        </main>
    </section >
    );
};

export default Footer;