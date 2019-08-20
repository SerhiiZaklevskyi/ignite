import React from "react";
import MusicSearch from "../MusicSearch/MusicSearch";
import styles from "./App.module.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import MyPlaylists from "../MyPlaylists/MyPlaylists";
import {BrowserRouter, Route} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistTracks: [],
      searchTracks: [],
      savedTracks: [],
      playlistName: "New Playlist",
      saveMsg: ""
    };

    this.search = this.search.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.save = this.save.bind(this);
    this.removeMyTrack = this.removeMyTrack.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveMsgAction = this.saveMsgAction.bind(this);
  }

  componentDidMount() {
    if (localStorage.length > 0) {
      this.setState({
        savedTracks: JSON.parse(localStorage.getItem("playlist"))
      });
    }
  }

  saveMsgAction() {
    if (this.state.playlistTracks.length > 0) {
      this.setState({saveMsg: "Playlist saved"});
    } else {
      this.setState({saveMsg: "Add at least one track"});
    }
  }

  save() {
    this.setState({savedTracks: this.state.playlistTracks});
    this.setState({playlistTracks: []}, () =>
      localStorage.setItem("playlist", JSON.stringify(this.state.savedTracks))
    );
    this.saveMsgAction();
  }

  handleChange(event) {
    this.setState({playlistName: event.target.value});
  }

  search(inputValue) {
    this.setState({saveMsg: ""});
    fetch(
      `https://orion.apiseeds.com/api/music/search/?q=${inputValue}&apikey=TTAxFFMk2RVmqsMpI2OObfFnYcWqV3rnsjMiSC7ZUlOjms9z4oADgMHmJIWX3yOL`,
      {
        cache: "no-store"
      }
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          searchTracks: data.result.filter(track =>
            track.title.toUpperCase().includes(inputValue.toUpperCase())
          )
        })
      );
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.track_id === track.track_id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(
      currentTrack => currentTrack.track_id !== track.track_id
    );

    this.setState({playlistTracks: tracks});
  }

  removeMyTrack(track) {
    let tracks = this.state.savedTracks;
    tracks = tracks.filter(
      currentTrack => currentTrack.track_id !== track.track_id
    );

    this.setState({savedTracks: tracks});
  }
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Header />
          <Route
            exact
            path='/'
            render={props => (
              <MusicSearch
                {...props}
                onSearch={this.search}
                searchResults={this.state.searchTracks}
                onAdd={this.addTrack}
                playlistTracks={this.state.playlistTracks}
                onRemove={this.removeTrack}
                onSave={this.save}
                onChange={this.handleChange}
                saveMsg={this.state.saveMsg}
              />
            )}
          />
          <Route
            path='/MyPlaylists'
            render={props => (
              <MyPlaylists
                {...props}
                tracks={this.state.savedTracks}
                onRemove={this.removeMyTrack}
                nameUpdate={this.state.playlistName}
              />
            )}
          />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
