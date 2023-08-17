import React from 'react';
import { NavLink } from 'react-router-dom';
//import { AppRoutes } from './AppRoutes';

const Navigation = () => {
    return (
       <> 
        <ul className="link-hover">
            <li>
                <NavLink to="/home">Home</NavLink></li>
            <li>
                <NavLink to="/about us ">About us</NavLink></li>
            <li>
                <NavLink to="/contact us">Contact us</NavLink></li>
            <li>
                <NavLink to="/gallery">Gallery</NavLink></li>
            <li>
                <NavLink to="/blogs">Blogs</NavLink></li>
        </ul>   
            
        </>
    );
}
export default Navigation;