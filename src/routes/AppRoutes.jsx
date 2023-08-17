import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import ErrorPage from '../error-page';
import { Routes } from 'react-router-dom'; 


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element= {<Home/>}>
                <Route path="/home" element={<Home/>}/>
                <Route exact path="about us" element={<About/>}/>
                <Route exact path="contact us" element={<Contact/>}/>
                <Route exact path="gallery" element={<Gallery/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>   
        </Routes>
            
    );

};