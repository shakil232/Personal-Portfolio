import React from 'react';
import './ProjectDetails.css';
import NavBar from '../../Shared/NavBar/NavBar';
import FooterDifferent from '../../Deffrent/FooterDifferent/FooterDifferent'
import { Card, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ProjectDetails = () => {
    return (

        <section className="project-background container">
            {/* navbar */}
            <NavBar />

            <div className="mb-4 mt-2">
                <h2 className="page-title text-white mb-5"> My Works</h2>
                <CardDeck>
                    <Card className="border-0 card-border">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">Card title</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>FireBase</span>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </Card.Body>

                    </Card>
                    <Card className="border-0 card-border">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">Card title</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>FireBase</span>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </Card.Body>

                    </Card>
                    <Card className="border-0 card-border">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">Card title</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>FireBase</span>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </Card.Body>

                    </Card>
                </CardDeck>
            </div>
            <div className="mb-4">
                <CardDeck>
                    <Card className="border-0 card-border">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">Card title</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>FireBase</span>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </Card.Body>

                    </Card>
                    <Card className="border-0 card-border">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">Card title</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>FireBase</span>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>
                        </Card.Body>

                    </Card>
                    <Card className="border-0 card-border">
                        <Card.Img variant="top" src="holder.js/100px160" />
                        <Card.Body className="blog-body">
                            <Card.Title className=" text-white">Card title</Card.Title>
                            <Card.Text>
                                <small className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum blanditiis reiciendis fugiat. Magnam, ipsum?</small>
                            </Card.Text>
                            <div className="d-flex justify-content-between text-white">
                                <div className="technology">
                                    <span>FireBase</span>
                                </div>
                            </div>

                            <div className="mt-4 d-flex">
                                <a className="project-icon" target="_blank" href="https://github.com/shakil232"><FontAwesomeIcon icon={faGithub} /></a>
                                <a className="project-icon" target="_blank" href=""><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                            </div>

                        </Card.Body>

                    </Card>
                </CardDeck>
            </div>


            {/* footer */}
            <FooterDifferent />
            
        </section>
    );
};

export default ProjectDetails;