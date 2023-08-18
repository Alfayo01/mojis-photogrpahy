import React from "react";
import camera from "../assets/camera.jpg";


let gallery = [
    {
        id: 1,
        src: camera,
        alt: "Picture of camera",
    },
];

const PageBackground = ({id, src }) => {
    return (
        <div className="bg-img">
        
            <img key={id} className="img-gallery" src={ src } alt={ gallery.alt }/>
        </div>
    );
}
export default PageBackground;