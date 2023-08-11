import React from 'react';
import NavBar from './NavBar';

const Header = () => {
    return (
        <>
        <header className="title-bar">
            <NavBar/>
        </header>
        <main>
        <h2 className="company-title">MOJIS PHOTOGRAPHY</h2>
        </main>
        
        </>
    );

}
export default Header;