import React from "react";

const Song = props => {
    console.log(props);
    
    return (
    <div>
      <img src={props.smallImage} alt="" />
      {props.fullTitle}
    </div>
  );
};

export default Song;
