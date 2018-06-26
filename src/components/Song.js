import React from "react";
import "./Song.css";

const Song = props => {
  return (
    <div className="song-container">
      <img className="song-image" src={props.smallImage} alt="" />
      {props.fullTitle}
    </div>
  );
};

export default Song;
