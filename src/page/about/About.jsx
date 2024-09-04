import React from 'react';
import Navbar from '../../components/Navbar';
import SubBanner from './SubBanner';
import CardSection2 from './CardSection2';
import RelativeCard from './RelativeCard';
import OurTeam from './OurTeam';

const About = () => {
    return (
        <div>
           <Navbar/>
           <SubBanner/>
           <CardSection2/>
           <RelativeCard/>
           <OurTeam/>
        </div>
    );
};

export default About;