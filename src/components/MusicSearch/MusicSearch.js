import React from "react";
import styles from "./MusicSearch.module.css";

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import PlayList from "./PlayList/PlayList";

const MusicSearch = props => {
  return (
    <div className={styles.content}>
      <SearchBar search={props.search} inputValue={props.inputValue} />
      <div className={styles.wrapper}>
        <SearchResults
          searchResult={props.searchResult}
          addTrack={props.addTrack}
        />
        <PlayList playlistTracks={props.playlistTracks} />
      </div>
    </div>
  );
};

export default MusicSearch;
