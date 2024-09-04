import React from 'react';
import Navbar from '../../components/Navbar';
import SubBanner from './SubBanner';
import CardSection2 from './CardSection2';
import RelativeCard from './RelativeCard';
import OurTeam from './OurTeam';
import MeetHeritage from './MeetHeritage';
import Testimonials from '../buyer/Testimonials';
import Footer from '../../components/Footer';

const About = () => {
    return (
        <div>
           <Navbar/>
           <SubBanner/>
           <CardSection2/>
           <RelativeCard/>
           <OurTeam/>
           <MeetHeritage/>
           <Testimonials/>
           <Footer/>
        </div>
    );
};

export default About;