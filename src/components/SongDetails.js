import React from "react";
import "./SongDetails.css";

const SongDetails = props => (
  <div id="song-details">
    <h1 className="song-details-title">Tap Twitty Tunes</h1>
    <h2 className="song-details-header2">{props.song.fullTitle}</h2>
    <div className="deets-container">
      <img className="song-details-image" src={props.song.largeImage} alt="" />
      <video controls muted src={props.song.sample} width="300" height="45" />
      <p>Title : {props.song.name}</p>
      <p>Artist : {props.song.artist}</p>
      <p>Album : {props.song.album}</p>
    </div>
  </div>
);

export default SongDetails;
