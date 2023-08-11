import React from "react";


let gallery = [
    {
        url1: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphotographycourse.net%2Fdifferent-types-of-cameras%2F&psig=AOvVaw2HNAOhK11PwQ0gslYCvafy&ust=1691660833049000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjQjOulz4ADFQAAAAAdAAAAABAE",
        width: "800px",
        height: "500px",
    },
];

const Image = () => {
    return (
        <>
            <img src={gallery.url1} width={gallery.width} height={gallery.height} alt="Picture of camera"/>
        </>
    );
}
export default Image;