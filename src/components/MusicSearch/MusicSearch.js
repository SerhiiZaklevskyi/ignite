import React from "react";
import styles from "./MusicSearch.module.css";

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import PlayList from "./PlayList/PlayList";

const MusicSearch = props => {
  return (
    <div className={styles.content}>
      <SearchBar
        search={props.search}
        inputValue={props.inputValue}
        getInput={props.getInput}
        newSearch={props.newSearch}
        clearResults={props.clearResults}
      />
      <div className={styles.wrapper}>
        <SearchResults
          searchResult={props.searchResult}
          addTrack={props.addTrack}
          error={props.error}
        />
        <PlayList
          playlistTracks={props.playlistTracks}
          removeTrack={props.removeTrack}
          savePlaylist={props.savePlaylist}
          saveName={props.saveName}
          saveMsg={props.saveMsg}
          SaveMsgDisplay={props.SaveMsgDisplay}
          clearPlaylist={props.clearPlaylist}
        />
      </div>
    </div>
  );
};

export default MusicSearch;
