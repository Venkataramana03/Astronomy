import React from "react";

const FetchedPhoto = (props) => (
    <div>
      <h3>{props?.photo?.title}</h3>
      <img src={props?.photo?.url} alt={props?.photo?.title} />
      <p>{props?.photo?.explanation}</p>
    </div>
  );
  
export default FetchedPhoto;