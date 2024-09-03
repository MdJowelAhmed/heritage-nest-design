import React from 'react';
import Navbar from '../../components/Navbar';
import FindProperties from './FindProperties';
import CardSection from './CardSection';
import PopularProperties from './PopularProperties';

const Buyer = () => {
    return (
        <div>
           <Navbar/>
           <FindProperties />
           <CardSection/>
           <PopularProperties/>
        </div>
    );
};

export default Buyer;