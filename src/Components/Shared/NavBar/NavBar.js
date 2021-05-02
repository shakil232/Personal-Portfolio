import React from 'react';
import './Navbar.css';
import { Nav, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className="mt-2 nav-list mb-5" expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto ms-auto ">
                <a className="mr-5  nav-menu" to="">Home</a>
                <a className="mr-5 nav-menu" to="">About</a>
                <a className="mr-5 nav-menu" to="">Works</a>
                <a className="mr-5  nav-menu" to="">Blog</a>
                <a className="mr-5 nav-menu" to="">Contact</a>

            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
    );
};

export default NavBar;