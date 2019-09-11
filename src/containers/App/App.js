import React from "react";
import MusicSearch from "../../components/MusicSearch/MusicSearch";
import styles from "./App.module.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer";
import MyPlaylists from "../../components/MyPlaylists/MyPlaylists";
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMusic} from "../logic/logic";
import {getInput, clearResults} from "../../actions/fetchAction";
import {
  addTrack,
  removeTrack,
  clearPlaylist,
  saveName,
  SaveMsgDisplay,
  newSearch
} from "../../actions/trackAction";
import {savePlaylist} from "../../actions/savePlaylistAction";

const App = props => {
  return (
    <div className={styles.App}>
      <Header />
      <MusicSearch
        search={props.fetchData}
        error={props.error}
        searchResult={props.music}
        inputValue={props.inputValue}
        addTrack={props.addTrack}
        removeTrack={props.removeTrack}
        playlistTracks={props.playlistTracks}
        getInput={props.getInput}
        savePlaylist={props.savePlaylist}
        saveName={props.saveName}
        saveMsg={props.saveMsg}
        SaveMsgDisplay={props.SaveMsgDisplay}
        clearPlaylist={props.clearPlaylist}
        newSearch={props.newSearch}
        clearResults={props.clearResults}
      />
      <MyPlaylists
        savedTracks={props.savedTracks}
        removeTrack={props.removeTrack}
        nameValue={props.nameValue}
      />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.fetchMusic.isFetching,
    error: state.fetchMusic.error,
    music: state.fetchMusic.music,
    inputValue: state.fetchMusic.searchValue,
    playlistTracks: state.trackAction.playlistTracks,
    savedTracks: state.savePlaylist.savedPlaylist,
    saveMsg: state.trackAction.saveMsg,
    nameValue: state.trackAction.nameValue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: inputValue => dispatch(fetchMusic(inputValue)),
    addTrack: track => dispatch(addTrack(track)),
    removeTrack: track => dispatch(removeTrack(track)),
    getInput: input => dispatch(getInput(input)),
    savePlaylist: playlist => dispatch(savePlaylist(playlist)),
    saveName: nameValue => dispatch(saveName(nameValue)),
    SaveMsgDisplay: saveMsg => dispatch(SaveMsgDisplay(saveMsg)),
    clearPlaylist: () => dispatch(clearPlaylist()),
    newSearch: () => dispatch(newSearch()),
    clearResults: () => dispatch(clearResults())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
