import React from 'react';
import NavBar from './NavBar';
import CompanyName from './CompanyName';

const Header = () => {
    return (
        <>
        <header className="title-bar">
            <NavBar/>
        </header>
        <main>
            <CompanyName/>
        </main>
        
        </>
    );

}
export default Header;