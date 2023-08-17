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

const Image = ({id, src }) => {
    return (
        <>
        {gallery.map((image) => ( 
            <img key={id} className="img-gallery" width={780} height={780} src={ src } alt={ image.alt }/>
        ))
        }
        </>
    );
}
export default Image;