import React from 'react';
import { Link } from 'react-router-dom';
//import { AppRoutes } from './AppRoutes';

const Navigation = () => {
    return (
       <> 
        <ul className="link-hover">
            <li>
                <Link to="/home">Home</Link></li>
            <li>
                <Link to="/about us ">About us</Link></li>
            <li>
                <Link to="/contact us">Contact us</Link></li>
            <li>
                <Link to="/gallery">Gallery</Link></li>
        </ul>
            
            
        </>
    );
}
export default Navigation;