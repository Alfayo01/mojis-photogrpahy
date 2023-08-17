import React from 'react';
import Image from '../components/Image';
import camera from '../assets/camera.jpg';


let gallery = [
        {
                id: 1,
                src: camera,
                alt: "Picture of camera",
        },
    
        {
                id: 2,
                src: 'https://www.surfer.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTk2Mjc3MTUzMzA1NDcwMjU2/greg-long.webp',
                alt: "Picture of surfer",
        },
        {
                id: 3,
                src: 'https://img.freepik.com/free-photo/portrait-child-listening-music_641386-243.jpg?size=626&ext=jpg',
                alt: "Picture of happy child",
        },
        {
                id:4,
                src: 'https://img.freepik.com/free-photo/medium-shot-boys-hugging_23-2148860422.jpg?size=626&ext=jpg',
                alt: "Happy child 2",
        },
        {
                id: 5,
                src: 'https://img.freepik.com/free-photo/medium-shot-smiley-african-boys_23-2148860433.jpg?size=626&ext=jpg',
                alt: "Happy child 3",
        },
    ];
const Gallery = () => {
   return (
        <>
        <header><h2 style={
                {
                        display: 'block',
                        textAlign: 'center',
                        fontWeight: 'bold',
                }
            }>Gallery Page</h2></header>
        <div className="gallery-container">

            
            {gallery.map((image) => ( 
            <main>
                <Image key={image.id} src={image.src } alt={image.alt}/>
            </main>
            )   
        )}
        

    </div>
    </>
   ); 
    
}

export default Gallery;