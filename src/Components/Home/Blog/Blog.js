import React from 'react';
import './Blog.css';
import REACT from '../../../images/React.jpg'
import Route from '../../../images/reuter.png'
import javaScript from '../../../images/js.png'
import { Button, Card } from 'react-bootstrap';

const Blog = () => {
    return (
        // <section className=" mt-5 pt-5 d-flex justify-content-center ">
        //     <div className="row col-md-4  col-sm-12 text-center  blog-card">
        //         <div className="">
        //             <div>
        //                 <img style={{width:'90%'}} src={REACT} className="img-fluid" alt="" />
        //             </div>
        //             <div>
        //                 <p>Lorem ipsum dolor sit amet.</p>
        //             </div>
        //             <div>
        //                 <small> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sequi reiciendis animi eius odio provident dolore at accusantium dolor blanditiis.</small>
        //             </div>
        //             <div className="d-flex">
        //                 <div>
        //                     <span>react</span>
        //                     <span>route</span>
        //                 </div>
        //                 <small>date</small>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row col-md-4  col-sm-12 text-center  blog-card">
        //         <div className="">
        //             <div>
        //                 <img style={{width:'85%'}} src={Route} className="img-fluid" alt="" />
        //             </div>
        //             <div>
        //                 <p>Lorem ipsum dolor sit amet.</p>
        //             </div>
        //             <div>
        //                 <small> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sequi reiciendis animi eius odio provident dolore at accusantium dolor blanditiis.</small>
        //             </div>
        //             <div className="d-flex">
        //                 <div>
        //                     <span>react</span>
        //                     <span>route</span>
        //                 </div>
        //                 <small>date</small>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="row col-md-4  col-sm-12 text-center blog-card">
        //         <div className="">
        //             <div>
        //                 <img style={{width:'85%'}} src={javaScript} className="img-fluid" alt="" />
        //             </div>
        //             <div>
        //                 <p>Lorem ipsum dolor sit amet.</p>
        //             </div>
        //             <div>
        //                 <small> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste sequi reiciendis animi eius odio provident dolore at accusantium dolor blanditiis.</small>
        //             </div>
        //             <div className="d-flex">
        //                 <div>
        //                     <span>react</span>
        //                     <span>route</span>
        //                 </div>
        //                 <small>date</small>
        //             </div>
        //         </div>
        //     </div>

        // </section>
        <section className="container d-flex justify-content-center mt-5 pt-5">
            <div className="row">
                <Card className="mb-5 mr-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="mb-5 mr-3" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card className="mb-5 " style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
};

export default Blog;