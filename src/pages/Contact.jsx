import React from 'react';
import camera from '../assets/camera.jpg';

const Contact = ({id, src}) => {
    return (
           <>
                    <h2>Contact Page</h2>
                    <image className="img-gallery" src={ camera } width={780} height={780} alt="Picture of a camera" />
            </>
       );
}

export default Contact;