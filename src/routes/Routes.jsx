import { Routes as Links, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';
import App from '../App';

export const Routes = () => {
    return (
         <Links>
            <Route path="/" element= {<App/> } />

            <Route path="/home" element={<Home/>} />
        
            <Route path="/about us" element={<About/>}/>
       
            <Route path="/contact us" element={<Contact/>}/>
       
            <Route path="/gallery" element={<Gallery/>}/>
        </Links>    
    );

};