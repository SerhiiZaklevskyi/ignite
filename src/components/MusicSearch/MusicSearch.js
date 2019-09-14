import React from "react";
import styles from "./MusicSearch.module.css";

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import PlayList from "./PlayList/PlayList";

const MusicSearch = props => {
  return (
    <div className={styles.content}>
      <SearchBar />
      <div className={styles.wrapper}>
        <SearchResults addTrack={props.addTrack} />
        <PlayList removeTrack={props.removeTrack} />
      </div>
    </div>
  );
};

export default MusicSearch;
