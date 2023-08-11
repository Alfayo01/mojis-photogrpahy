import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Gallery from '../pages/Gallery';

export const Routes = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/about us" element={<Contact/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
    );

};