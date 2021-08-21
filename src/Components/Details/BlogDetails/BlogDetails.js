import React from 'react';
import './BlogDetails.css'
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent'
import NavBar from '../../Shared/NavBar/NavBar';
import { Card, CardDeck } from 'react-bootstrap';
import FireBase from '../../../images/firebase.png'
import HeroKu from '../../../images/heroku.png'
import REACT from '../../../images/React.jpg'
import MongoDB from '../../../images/mongo.jpg'
import JavaScript from '../../../images/js.png'
import Router from '../../../images/reuter.png'

const BlogDetails = () => {
    return (
        <div className="blog-background container">

            {/* navbar */}
            <NavBar />

            <div className="mb-5 mt-3">
                <h2 className="page-title text-white mb-5"> My Blogs</h2>
                <CardDeck>
                    <Card className="border-0 card-border">
                        <Card.Img className="img-fluid" variant="top" src={FireBase} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">FireBase</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>FireBase</span>
                                </div>
                                <div className="mt-1">
                                    <small>April 10 2021</small>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>

                    <Card className="border-0 card-border">
                        <Card.Img className="img-fluid" variant="top" src={HeroKu} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">HeroKu</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>HeroKu</span>
                                   
                                </div>
                                <div className="mt-1">
                                    <small>Feb 15 2021</small>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>

                    <Card className="border-0 card-border">
                        <Card.Img className="img-fluid" variant="top" src={REACT} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">React</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>React</span>
                                    
                                </div>
                                <div className="mt-1">
                                    <small>Feb 02 2021</small>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>
                </CardDeck>
            </div>

            <div className="mb-5 mt-3">
                <CardDeck>
                    <Card className="border-0 card-border">
                        <Card.Img className="img-fluid" variant="top" src={MongoDB} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">MongoDB</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>MongoDB</span>
                                    
                                </div>
                                <div className="mt-1">
                                    <small>April 25 2021</small>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>

                    <Card className="border-0 card-border">
                        <Card.Img className="img-fluid" variant="top" src={JavaScript} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">JavaScript</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>JavaScript</span>
                                 
                                </div>
                                <div className="mt-1">
                                    <small>April 04 2021</small>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>

                    <Card className="border-0 card-border">
                        <Card.Img className="img-fluid" variant="top" src={Router} />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">React-Router</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>React-Router</span>
                                    
                                </div>
                                <div className="mt-1">
                                    <small>April 29 2021</small>
                                </div>
                            </div>
                        </Card.Body>

                    </Card>
                </CardDeck>
            </div>

            {/* footer */}
            <FooterDifferent />
        </div>
    );
};

export default BlogDetails;