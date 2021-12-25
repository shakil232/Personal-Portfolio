import React from 'react';
import './AboutDetails.css'
import profile from '../../../images/profile/profile-2.png'
import NavBar from '../../Shared/NavBar/NavBar';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent'

const AboutDetails = () => {
    return (
        <section className="about-background">
            {/* nav */}
            <NavBar />

            <main className="container">
                <div className="row pb-4">
                    {/* leftArea */}
                    <div className="col-md-6 mt-3 px-3">

                        {/* Profile-Image */}
                        <div className=" w-50 m-auto pb-3">
                            <img src={profile} alt="profile-img-2" className="img-fluid " />
                        </div>

                        {/* Profile-Details */}
                        <div>
                            <h4 className="text-white mt-3">
                                <small className="head-text mr-2 mb-3">I'm</small>
                                Mohammad Shakil Ahmed
                           </h4>
                            <small className="text-justify header-about text-white"> I am a self-thought programmer. I try to develop the front end of a web application using React.js. I'm interested in JavaScript-based software technologies. I am always ready to learn any technology or language. I am sincere about my work to achieve my goals anyway. </small>
                        </div>

                    </div>

                    {/* rightArea */}
                    <div className="col-md-6">
                        <div className="my-5">
                            <h4 className="page-title mb-4 mt-3 text-white">My Skills Set</h4>
                            <div className="technology d-flex">
                                <span>JavaScript</span>
                                <span>ES6</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap</span>
                                <span>MAterial UI</span>
                                <span>Tailwind</span>
                                <span>SASS</span>
                                <span>Font Awesome</span>
                                <span>React Router</span>
                                <span>React Hok</span>
                                <span>Netlify</span>
                                <span>HeroKu</span>
                                <span>React Spring</span>
                                <span>VS Code</span>

                            </div>

                            <h4 className="page-title mb-4 mt-4 text-white">
                                I want to work with
                                </h4>
                            <div className="technology d-flex">
                                <span>JavaScript</span>
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                            </div>

                            <h4 className="page-title mt-4 text-white">
                                I also Familiar
                                </h4>
                            <div className="technology d-flex">
                                <span>Stripe</span>
                                <span>SSLCommerz</span>
                                <span>Google Map</span>
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

export default AboutDetails;