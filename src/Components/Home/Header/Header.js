import React from 'react';
import './Header.css'
import profile from '../../../images/profile.png'
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
                       <small className="text-justify text-white"> I am Mohammad Shakil Ahmed. I'm a Junior Front-End Mern Web-Developer. I'm interested in JavaScript-based software technologies. I always try to learn about new features and technologies. I am sincere about my work to achieve my goals anyway.</small>
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