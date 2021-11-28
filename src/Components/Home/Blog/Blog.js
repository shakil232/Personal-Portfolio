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
            {/* Blog-header-section */}
            <div className="blog-section mb-5">
                <h2>
                    <span className="text-white"> <span className="title-text">SOME OF </span>MY BLOG</span>
                </h2>
            </div>

            {/* Blog-card-section */}
            <main className="row row-cols-1 row-cols-md-3 g-4 ">

            <a className="text-decoration-none text-white" href="https://azharbinshakil.medium.com/javascript-summary-a48033ba2ee5" target="_blank">
                <div className="col mb-3">
                    <div className="card border-0 rounded-3 card-hover-custom h-auto">
                        <div className="inner">
                            <img src={javaScript} className="card-img-top img-fluid" alt="..." />
                        </div>
                        <div className="card-body ">
                            <h5 className="card-title ">Introduction To javaScript</h5>
                            <p className="card-text" >JavaScript is a single thread, prototype based programming language that support multiple programming..</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between text-white">                   
                                <div classNameName="technology mt-2">
                                    <span>javaScript</span>
                                </div>
                                <div classNameName="mt-2">
                                    <small>August 30 2021</small>
                                </div>                           
                        </div>
                    </div>
                </div>
            </a>


                <div className="col mb-3">
                    <div className="card border-0 shadow-lg rounded-3 card-hover-custom h-100">
                        <div className="inner">
                            <img src={REACT} className="card-img-top img-fluid" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <small classNameName="card-text text-white" >JavaScript is a single thread, prototype based programming language that support multiple programming..</small>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

                <div className="col mb-3">
                    <div className="card border-0 shadow-lg rounded-3 card-hover-custom h-100">
                        <div className="inner">
                            <img src={Route} className="card-img-top img-fluid" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>

            </main>
            {/* <CardDeck >
                        <div className="col">
                        <Card className="border-0 card-border mt-3 ">
                            <a href="https://azharbinshakil.medium.com/javascript-summary-a48033ba2ee5" target="_blank">
                                <Card.Img classNameName="img-fluid" variant="top" src={javaScript} />
                                <Card.Body classNameName="blog-body">
                                    <Card.Title classNameName=" text-white">Introduction To javaScript</Card.Title>
                                    <Card.Text>
                                        <small classNameName="text-justify text-white" >JavaScript is a single thread, prototype based programming language that support multiple programming..</small>
                                    </Card.Text>
                                    <div classNameName="d-flex justify-content-between text-white blog-bottom">
                                        <div classNameName="technology mt-2">
                                            <span>javaScript</span>

                                        </div>
                                        <div classNameName="mt-2">
                                            <small>August 30 2021</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </a>

                        </Card>
                        </div>

                        <div classNameName="col">
                        <Card classNameName="border-0 card-border mt-3">
                            <a href="https://azharbinshakil.medium.com/introduction-to-react-js-d39e1b00c443" target="_blank">
                                <Card.Img classNameName="img-fluid" variant="top" src={REACT} />
                                <Card.Body classNameName="blog-body">
                                    <Card.Title classNameName=" text-white">Introduction To React</Card.Title>
                                    <Card.Text>
                                        <small classNameName="text-justify text-white" >React is a free and open-source front-end JavaScript library for building user interfaces or UI components...</small>
                                    </Card.Text>
                                    <div classNameName="d-flex justify-content-between text-white blog-bottom">
                                        <div classNameName="technology mt-2">
                                            <span>React.js</span>

                                        </div>
                                        <div classNameName="mt-2">
                                            <small>May 07 2021</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </a>

                        </Card>
                        </div>

                        <div classNameName="col">
                        <Card classNameName="border-0 card-border mt-3">
                            <a href="https://azharbinshakil.medium.com/getting-started-with-react-router-64d052bbdc17" target="_blank">
                                <Card.Img classNameName="img-fluid" variant="top" src={Route} />
                                <Card.Body classNameName="blog-body">
                                    <Card.Title classNameName=" text-white">Getting start with React Router</Card.Title>
                                    <Card.Text>
                                        <small classNameName="text-justify text-white" >What you will know from this article : What is React Router, Install and configure React Router, Static Routing Dynamic Routing..</small>
                                    </Card.Text>
                                    <div classNameName="d-flex justify-content-between text-white blog-bottom">
                                        <div classNameName="technology mt-2">
                                            <span>React.js</span>
                                            <span>React Router</span>

                                        </div>
                                        <div classNameName="mt-2">
                                            <small>August 31 2021</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </a>

                        </Card>
                        </div>
                    </CardDeck> */}

            {/* </div>
            </div>  */}


            {/* AllBlog-btn-section */}
            <div className="action text-center">
                <Link className="details-link" to="/blog">
                    <button type="button" className="btn-common blog-btn">All Blogs</button>
                </Link>

            </div>

        </section>
    );
};

export default Blog;