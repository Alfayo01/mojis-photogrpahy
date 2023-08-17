import React from "react";
import camera from "../images/camera.jpg";


let gallery = [
    {
        id: 1,
        src: camera,
        width: "auto",
        height: "auto",
        alt: "Picture of camera",
    },

];

const Image = () => {
    return (
        <>
        {gallery.map((image) => ( 
            <img key={gallery.id} className="img-gallery" src={gallery.src} width={gallery.width} height={gallery.height} alt={gallery.alt}/>
        ))
        }
        </>
    );
}
export default Image;