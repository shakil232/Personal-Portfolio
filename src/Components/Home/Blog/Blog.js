import React from 'react';
import './Blog.css';
import REACT from '../../../images/Reactp.png'
import Route from '../../../images/reuter.png'
import javaScript from '../../../images/js.png'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="container  mt-5 pt-5">
            <div className="row d-flex mb-5">
                <div className="col-md-7">
                    <div className="section-title ">
                        <h1 className="h2">
                            <span className="text-white"> <span className="works-text">Some Of  </span>   My Article</span>

                        </h1>
                    </div>

                </div>
            </div>
            <div className="container d-flex justify-content-center m">
                <div className="row">
                    <Card className="mb-5 mr-3 border-0 card-border" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Route} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">React Route</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between blog-bottom text-white">
                                <div>
                                    <span>React.js</span>
                                    <span>React Route</span>
                                </div>
                                <div>
                                    <span>April 10 2021</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mb-5 mr-3 border-0 card-border" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={REACT} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">REACT</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between blog-bottom text-white">
                                <div>
                                    <span>React.js</span>
                                </div>
                                <div>
                                    <span>Feb 2 2021</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="mb-5 border-0 card-border" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={javaScript} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">javaScript</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex  justify-content-between blog-bottom text-white">
                                <div>
                                    <span>JavaScript</span>
                                </div>
                                <div>
                                    <span>April 4 2021</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="action text-center">
                <Link className="details-link" to="/blog">
                    <button type="button" className="blog-btn">All Article</button>
                </Link>

            </div>
        </section>
    );
};

export default Blog;