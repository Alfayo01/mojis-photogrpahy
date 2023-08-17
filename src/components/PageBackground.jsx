import React from "react";
import camera from "../assets/camera.jpg";


let gallery = [
    {
        id: 1,
        src: camera,
        alt: "Picture of camera",
    },

    {
        id: 2,
        src: 'https://depositphotos.com/photos/surf.html?qview=8450806',
        alt: "Picture of surfer",
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