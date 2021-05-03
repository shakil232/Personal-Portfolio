import React from 'react';
import './Project.css'
import Route from '../../../images/Reactp.png'
import { Link } from 'react-router-dom';

const Project = () => {

    return (
        <section className=" container text-white  mt-5 mb-5 pt-5">
            <div className="row d-flex">
                <div className="col-md-7">
                    <div className="section-title ">
                        <h1 className="h2">
                            <span className="text-green"> <span className="works-text">Some Of</span> My Works</span>

                        </h1>

                    </div>

                </div>
            </div>
            <div className="my-4">
                <div className="project-featured d-flex align-content-center my-4 row">
                    <div className="col-md-7" >
                        <div className="project-img">
                            <img src={Route} className="img img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="project-info px-4 py-1  pt-2 rounded " style={{ backgroundColor: "rgb(23,42,69" }}>
                            <p className="text-green small m-0">01</p>
                            <h3> Red Onion Foods</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</p>
                            <div className="d-flex technology">
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap4</span>
                            </div>
                            <ul className="preview list-inline mt-4">
                                <li className="list-inline-item ">git</li>
                                <li className="list-inline-item">fb</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div className="my-4">
                <div className="project-featured d-flex align-content-center my-4 row">
                    <div className="col-md-7" >
                        <div className="project-img">
                            <img src={Route} className="img img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="project-info px-4 py-1  pt-2 rounded " style={{ backgroundColor: "rgb(23,42,69" }}>
                            <p className="text-green small m-0">01</p>
                            <h3> Red Onion Foods</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</p>
                            <div className="d-flex technology">
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap4</span>
                            </div>
                            <ul className="preview list-inline mt-4">
                                <li className="list-inline-item ">git</li>
                                <li className="list-inline-item">fb</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            <div className="my-4">
                <div className="project-featured d-flex align-content-center my-4 row">
                    <div className="col-md-7" >
                        <div className="project-img">
                            <img src={Route} className="img img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-md-5 mt-2">
                        <div className="project-info px-4 py-1  pt-2 rounded " style={{ backgroundColor: "rgb(23,42,69" }}>
                            <p className="text-green small m-0">01</p>
                            <h3> Red Onion Foods</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, saepe!</p>
                            <div className="d-flex technology">
                                <span>React.js</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase</span>
                                <span>Bootstrap4</span>
                            </div>
                            <ul className="preview list-inline mt-4">
                                <li className="list-inline-item ">git</li>
                                <li className="list-inline-item">fb</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="action text-center">
                <Link className="details-link" to="/works"> 
                    <button type="button" className="work-btn">All Works</button>
                </Link>
                <a href="">

                </a>

            </div>
        </section>
    );
};

export default Project;