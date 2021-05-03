import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <div className="text-center mt-5 pt-5 contact-text ">

            <p>What's Next?</p>
            <h3 className="text-white">Get In Touch</h3>

            <small className="text-white">I'd Love to hear from you . Whether you have a question or just want to say hi,<br /> fell free to drop a message. I'll try my best to get back to you!</small>
            <br />
            <Link to="/contact">
                <button className="mt-5 contact-btn">Say Hello </button>
            </Link>

        </div>
    );
};

export default Contact;