import React from 'react';
import './Navbar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar className="mt-2 nav-list mb-5" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ms-auto ">
                <Link className="mr-5  nav-menu" to="/home" >Home</Link>
                <Link className="mr-5 nav-menu" to="/about" >About</Link>
                <Link className="mr-5  nav-menu" to="/works" >Works</Link>
                <Link className="mr-5  nav-menu" to="/blog" >Blog</Link>
                <Link className="mr-5  nav-menu" to="/contact" >Contact</Link>
                
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    );
};

export default NavBar;