import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Blog/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;