import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import Image from '../components/Image';

const Gallery = () => {
   return (
    <div>
        <BaseLayout>
            <h2>Gallery Page</h2>
            <Image/>
        </BaseLayout>
    </div>
   ); 
    
}

export default Gallery;