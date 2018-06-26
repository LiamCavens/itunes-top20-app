import React, { Component } from "react";
import "./SongDetails.css";

const SongDetails = props => (
  <div id="song-details">
    <h1 className="song-details-title">Tap Twitty Tunes</h1>
    <img src={props.largeImage} alt="" />
  </div>
);

export default SongDetails;
