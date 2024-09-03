import React from 'react';
import Navbar from '../../components/Navbar';
import Banner from './Banner';
import HomeBuyingSolution from './HomeBuyingSolution';
import OthersService from './OthersService';

const Landing = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <HomeBuyingSolution/>
            <OthersService/>
        </div>
    );
};

export default Landing;