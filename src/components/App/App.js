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
      searchTracks: [],
      savedTracks: [],
      playlistName: ""
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.save = this.save.bind(this);
    this.removeMyTrack = this.removeMyTrack.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({playlistName: event.target.value});
  }
  save() {
    this.setState({savedTracks: this.state.playlistTracks});
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

  removeMyTrack(track) {
    let tracks = this.state.savedTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({savedTracks: tracks});
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
          onSave={this.save}
          onChange={this.handleChange}
        />
        <MyPlaylists
          tracks={this.state.savedTracks}
          onRemove={this.removeMyTrack}
          nameUpdate={this.state.playlistName}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
