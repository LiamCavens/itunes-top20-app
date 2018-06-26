import React, { Component } from "react";
import SongList from "../components/SongList";
import SongDetails from "../components/SongDetails";
import "./MusicBox.css";

class MusicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: ""
    };

    this.handleSongSelect = this.handleSongSelect.bind(this);
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
      .then(res => res.json())
      .then(response => {
        const songs = response.feed.entry.map((song, index) => ({
          id: song.id.attributes["im:id"],
          artist: song["im:artist"].label,
          album: song["im:collection"].label,
          name: song["im:name"].label,
          smallImage: song["im:image"][1].label,
          largeImage: song["im:image"][2].label,
          sample: song.link[1].attributes.href,
          fullTitle: song.title.label,
          selectSong: this.makeHandleSongSelect(index)
        }));
        this.setState({ songs });
      });
  }

  makeHandleSongSelect(index) {
      return (
          
      )
  }

  handleSongSelect(event) {
    const songIndex = event.currentTarget.value;
    const song = this.state.songs[songIndex];
    this.setState({ selectedSong: song });
  }


  render() {
    return (
      <div id="musicbox-container">
        <SongList songs={this.state.songs} onSelect={this.handleSongSelect} />
        <SongDetails />
      </div>
    );
  }
}

export default MusicBox;
