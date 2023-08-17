import React from 'react';
import { Outlet } from 'react-router-dom';
const Home = () => {
    
    return (
        <>
            <BaseLayout>
                <Outlet/>
            </BaseLayout>
        </>
    ); 
    
}
export default Home;