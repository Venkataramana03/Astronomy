import React from "react";
import { withRouter } from "react-router";




class ImageDescription extends React.Component {
    render(){
        console.log(this.props);
    return(
        <div>
           <h3>
            Explanation: {this.props.location.imgdata.explanation}
           </h3>
           <h3>
           Date: {this.props.location.imgdata.date}
           </h3>
           <h3>
           Title: {this.props.location.imgdata.title}
           </h3>

           <img src={this.props.location.imgdata.url} alt={this.props.location.imgdata.title} />

        </div>
    )}
    
}

export default withRouter (ImageDescription);
