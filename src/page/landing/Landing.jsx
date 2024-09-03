import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import HomeBuyingSolution from './HomeBuyingSolution';
import OthersService from './OthersService';
import Footer from '../../components/Footer';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HomeBuyingSolution/>
            <OthersService/>
            <Footer/>
        </div>
    );
};

export default Landing;