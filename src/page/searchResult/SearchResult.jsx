import React from 'react';
import Navbar from '../../components/Navbar';
import Results from './Results';
import NeedToHome from './NeedToHome';
import Testimonials from '../buyer/Testimonials';
import Footer from '../../components/Footer';

const SearchResult = () => {
    return (
        <div>
            <Navbar/>
            <Results/>
           <NeedToHome/>
           <Testimonials/>
           <Footer/>
         </div>
    );
};

export default SearchResult;