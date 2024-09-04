import React from 'react';
import Navbar from '../../components/Navbar';
import Details from './Details';
import Amenities from './Amenities';
import NeedToHome from '../searchResult/NeedToHome';
import Footer from '../../components/Footer';
import NewProperties from '../buyer/NewProperties';
import OthersService from '../landing/OthersService';

const PropertyDetails = () => {
    return (
        <div>
            <Navbar/>
            <Details/>
            <Amenities/>
           <OthersService/>
            <NewProperties/>
            <Footer/>
        </div>
    );
};

export default PropertyDetails;