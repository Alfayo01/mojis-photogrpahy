import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Route } from 'react-router-dom';

const Contact = () => {
    return (
            <Route path="/contact">
                <Header/>
                <p>Contact us on WhatsApp</p>
                <Footer/>
            </Route>
       );
}

export default Contact;