import React from "react";




const Image = ({src, alt}) => {
    return (
        <>
       
           <img className="img-gallery" width={780} height={1000} src={ src } alt={ alt }/>
                
        </>
    
    );
}
export default Image;