import React from "react";
import { Link } from "react-router-dom";


class ImageList extends React.Component {
    
 render() {
     
    return (
        this.props.images.map((img) => {
            console.log(img);
            return (
                <div key={img.title}>
                    <h3>{img?.title} {img.date}</h3>
                    <Link to={{pathname:'/image/'+ img.date, imgdata:img}}><img src={img?.url} alt={img.title} /></Link>

                </div>
            
            )
        })
        
     )
 } 

}

     


export default ImageList;