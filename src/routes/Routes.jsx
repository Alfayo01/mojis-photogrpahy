import { Routes as Links, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';

export const Routes = () => {
    return (
        <>
        <Links>
            <Route path="/home" element={<Home/>} />
        </Links>
        <Links>
            <Route path="/about us" element={<About/>}/>
        </Links>
        <Links>
            <Route path="/contact us" element={<Contact/>}/>
        </Links>
        <Links>
            <Route path="/gallery" element={<Gallery/>}/>
        </Links>
        </>
    );

};