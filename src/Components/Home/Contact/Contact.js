import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

const Contact = () => {
    return (
        <section className=" container mt-4 pt-4 ">
            <main className="text-center">
                <div className="contact-text">
                    <p>What's Next?</p>
                    <h3 className="text-white">Get In Touch</h3>
                </div>

                <div >
                    <small className="text-white col-md-5 col-sm-12 ">I'd Love to hear from you . Whether you have a question or just want to say hi,<br />
                fell free to drop a message. I'll try my best to get back to you! </small>
                </div>

                <Link to="/contact">
                    <button className="mt-5 btn-common btn-common-2">Say Hello </button>
                </Link>
            </main>
        </section>
    );
};

export default Contact;