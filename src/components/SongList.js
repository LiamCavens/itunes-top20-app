import React, { Component } from "react";
import Song from "./Song";
import "./SongList.css";

class SongList extends Component {
  render() {
    const songListItems = this.props.songs.map(song => {
      return (
        <li key={song.id}>
          <Song smallImage={song.smallImage} fullTitle={song.fullTitle} />
        </li>
      );
    });
    return (
      <div id="nav-list">
        <p id="nav-header">Uk Top 20 Ranking</p>
        <ol>{songListItems}</ol>
      </div>
    );
  }
}

export default SongList;
