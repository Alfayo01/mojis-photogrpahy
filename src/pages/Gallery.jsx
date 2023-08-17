import React from 'react';
import Image from '../components/Image';
import camera from '../assets/camera.jpg';


let gallery = [
        {
                id: 1,
                src: camera,
                alt: "Canon camera 1",
        },
    
        {
                id: 2,
                src: 'https://www.surfer.com/.image/c_limit%2Ccs_srgb%2Cq_auto:eco%2Cw_760/MTk2Mjc3MTUzMzA1NDcwMjU2/greg-long.webp',
                alt: "Picture of surfer 1",
        },
        {
                id: 3,
                src: 'https://img.freepik.com/free-photo/portrait-child-listening-music_641386-243.jpg?size=626&ext=jpg',
                alt: "Picture of happy child 1",
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
        {
                id: 6,
                src: 'https://i.pcmag.com/imagery/roundups/00iEsXePag63dLkg92BRFxu-1..v1664999313.jpg',
                alt: "Canon Camera 2"
        },
    ];

let longImage = {
        gridRow: 1 / 4,
        height: 1000,
}

let smallImage = {
        gridRow: 1 / 1,
}


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
                 
                <Image style={(gallery.id === 1) ? longImage : smallImage} key={image.id} src={image.src } alt={image.alt}/>
            </main>
            ) 
        )} 
        

    </div>
    </>
   ); 
    
}

export default Gallery;