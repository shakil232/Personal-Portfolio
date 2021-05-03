import React from 'react';
import './AboutDetails.css'
import profile from '../../../images/profile.png'
import NavBar from '../../Shared/NavBar/NavBar';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent'

const AboutDetails = () => {
    return (
        <div className="about-background">
            <NavBar/>
            <div className="container">
                <div className=" pb-5">
                    <div className="row d-flex">
                        {/* leftArea */}
                        <div className="col-md-6 mt-5 ">
                            <img className="img-fluid profile-img" src={profile} alt="" />
                            <h4 className="text-white mt-3">
                                <small className="head-text mr-2 mb-3">I'm</small> 
                                Mohammad Shakil Ahmed
                           </h4>
                            <small className="text-justify header-about text-white"> I am Mohammad Shakil Ahmed. I'm a Junior Front-End Mern Web-Developer. I'm interested in JavaScript-based software technologies. I always try to learn about new features and technologies. I am sincere about my work to achieve my goals anyway.</small>

                        </div>
                        
                       {/* rightArea */}
                        <div className="col-md-6">
                            <div className="my-5">
                                <h4 className="page-title mb-4 mt-4 text-white">My Skills Set</h4>
                                <div className="technology d-flex">
                                    <span>JavaScript</span>
                                    <span>ES6</span>
                                    <span>React.js</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>MongoDB</span>
                                    <span>Redux.js</span>
                                    <span>Firebase</span>
                                    <span>Bootstrap</span>
                                    <span>MAterial UI</span>
                                    <span>Font Awesome</span>
                                    <span>React Router</span>
                                    <span>React Hok</span>
                                    <span>Netlify</span>
                                    <span>HeroKu</span>
                                    <span>React Spring</span>
                                    <span>REST API</span>
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
                                    <span>Next.js</span>
                                    <span>React Native</span>
                                    <span>TypeScript</span>
                                    <span>Stripe</span>
                                    <span>SSLCommerz</span>
                                    <span>Rechart</span>
                                    <span>Google Map</span>  
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <FooterDifferent/>
        </div>
    );
};

export default AboutDetails;