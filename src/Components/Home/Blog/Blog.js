import React from 'react';
import './Blog.css';
import REACT from '../../../images/Reactp.png'
import Route from '../../../images/reuter.png'
import javaScript from '../../../images/js.png'
import { Button, Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <section className="container  mt-4 pt-4">
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
                    <CardDeck>
                        <Card className="border-0 card-border mt-3" >
                            <Card.Img className="img-fluid" variant="top" src={REACT} />
                            <Card.Body className="blog-body">
                                <Card.Title className=" text-white">MongoDB</Card.Title>
                                <Card.Text>
                                    <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                                </Card.Text>
                                <div className="d-flex justify-content-between blog-bottom text-white ">
                                    <div className="technology mt-2">
                                        <span>MongoDB</span>

                                    </div>
                                    <div className="mt-2">
                                        <small>April 25 2021</small>
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>

                        <Card className="border-0 card-border mt-3">
                            <Card.Img className="img-fluid" variant="top" src={javaScript} />
                            <Card.Body className="blog-body">
                                <Card.Title className=" text-white">JavaScript</Card.Title>
                                <Card.Text>
                                    <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                                </Card.Text>
                                <div className="d-flex justify-content-between text-white blog-bottom">
                                    <div className="technology mt-2">
                                        <span>JavaScript</span>

                                    </div>
                                    <div className="mt-2">
                                        <small>April 04 2021</small>
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>

                        <Card className="border-0 card-border mt-3">
                            <Card.Img className="img-fluid" variant="top" src={Route} />
                            <Card.Body className="blog-body">
                                <Card.Title className=" text-white">React-Router</Card.Title>
                                <Card.Text>
                                    <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                                </Card.Text>
                                <div className="d-flex justify-content-between text-white blog-bottom">
                                    <div className="technology mt-2">
                                        <span>React-Router</span>

                                    </div>
                                    <div className="mt-2">
                                        <small>April 29 2021</small>
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>
                    </CardDeck> 

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