import React, { Component } from "react";
import Song from "./Song";

class SongList extends Component {
  render() {
    const songListItems = this.props.songs.map(song => {
      return (
        <li key={song.id}>
          <Song smallImage={song.smallImage} fullTitle={song.fullTitle} />
        </li>
      );
    });

    return <div>{songListItems}</div>;
  }
}

export default SongList;
