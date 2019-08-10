import React from "react";
import styles from "./MusicSearch.module.css";

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import PlayList from "./PlayList/PlayList";

class MusicSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistTracks: [],
      searchTracks: []
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  search() {
    fetch("./songs.json", {
      cache: "no-store"
    })
      .then(res => res.json())
      .then(data => this.setState({searchTracks: data}));
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
    console.log(tracks);
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }
  render() {
    return (
      <div>
        <SearchBar onSearch={this.search} />
        <div className={styles.wrapper}>
          <SearchResults
            searchResults={this.state.searchTracks}
            onAdd={this.addTrack}
          />
          <PlayList
            playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack}
          />
        </div>
      </div>
    );
  }
}

export default MusicSearch;
