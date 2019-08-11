import React from "react";
import MusicSearch from "../MusicSearch/MusicSearch";
import styles from "./App.module.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import MyPlaylists from "../MyPlaylists/MyPlaylists";

class App extends React.Component {
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
  search(inputValue) {
    fetch("./songs.json", {
      cache: "no-store"
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          searchTracks: data.filter(
            currentTrack => currentTrack.name === inputValue
          )
        })
      );
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <MusicSearch
          onSearch={this.search}
          searchResults={this.state.searchTracks}
          onAdd={this.addTrack}
          playlistTracks={this.state.playlistTracks}
          onRemove={this.removeTrack}
        />
        <MyPlaylists />
        <Footer />
      </div>
    );
  }
}

export default App;
