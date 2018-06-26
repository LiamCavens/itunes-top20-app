import React from "react";
import "./Song.css";

const Song = props => {
  return (
    <div className="song-container" onClick={props.selectSong}>
      <img className="song-image" src={props.smallImage} alt="" />
      {props.fullTitle}
    </div>
  );
};

export default Song;
