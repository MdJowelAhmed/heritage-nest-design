import React from 'react';
import Navbar from '../../components/Navbar';
import FindProperties from './FindProperties';
import CardSection from './CardSection';
import PopularProperties from './PopularProperties';
import NewProperties from './NewProperties';
import Testimonials from './Testimonials';
import Footer from '../../components/Footer';

const Buyer = () => {
    return (
        <div>
           <Navbar/>
           <FindProperties />
           <CardSection/>
           <PopularProperties/>
           <NewProperties/>
           <Testimonials/>
           <Footer/>
        </div>
    );
};

export default Buyer;