import React from "react";
import MusicSearch from "../../components/MusicSearch/MusicSearch";
import styles from "./App.module.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer";
import MyPlaylists from "../../components/MyPlaylists/MyPlaylists";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMusic} from "../logic/logic";
import {addTracks} from "../logic/logic";

const App = props => {
  return (
    <div className={styles.App}>
      <Header />
      <MusicSearch
        search={props.fetchData}
        searchResult={props.music}
        addTrack={props.addTracks}
        playlistTracks={props.playlistTracks}
      />
      <MyPlaylists />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.fetchMusic.isFetching,
    error: state.fetchMusic.error,
    music: state.fetchMusic.music,
    playlistTracks: state.trackAction.playlistTracks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchMusic()),
    addTracks: () => dispatch(addTracks())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
