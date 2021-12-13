import React from 'react';
import './ContactDetails.css';
import NavBar from '../../Shared/NavBar/NavBar';
import emailjs from 'emailjs-com';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent';

const ContactDetails = () => {

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_th482ch', 'template_7heariy', e.target, "user_tbFNuorI3og0UJCyvUeAH")
            .then((result) => {
                if (result) {
                    alert("your Mail Send Successfully.")
                }
            },
                (error) => {
                    console.log(error.text);
                });
        e.target.reset()
    }
    
    return (
        <section className="contact-background ">
            {/* nav */}
            <NavBar />

            <main className="container">

                {/* from */}
                <div className="mx-auto rounded mt-3 my-3 p-3 px-4 pb-2 col-md-6" style={{ backgroundColor: "#172a45" }}>
                    <h3 className="text-center mb-4 text-white"> Get In Touch</h3>

                    <form onSubmit={sendMail} >

                        <div className="form-group">
                            <input type="text" name="name" placeholder="Your Name" className="form-control" />
                        </div>

                        <div className="form-group">
                            <input type="email" name="email" placeholder="Your Email" className="form-control" />
                        </div>

                        <div className="form-group">
                            <input type="text" name="subject" placeholder="Subject" className="form-control" />
                        </div>

                        <div className="form-group">
                            <textarea name="message" rows="3" placeholder="Your Message" className="form-control" ></textarea>
                        </div>

                        <div className="text-center form-group com-sm-12">
                            <input type="submit" className="submitMail-btn" value="Submit" />
                        </div>

                    </form>
                </div>
            </main>

            {/* footer */}
            <FooterDifferent />
        </section>
    );
};

export default ContactDetails;