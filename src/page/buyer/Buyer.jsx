import React from 'react';
import Navbar from '../../components/Navbar';
import FindProperties from './FindProperties';
import CardSection from './CardSection';

const Buyer = () => {
    return (
        <div>
           <Navbar/>
           <FindProperties />
           <CardSection/>
        </div>
    );
};

export default Buyer;