import React from "react";
import styles from "./MusicSearch.module.css";

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import PlayList from "./PlayList/PlayList";

const MusicSearch = props => {
  return (
    <div className={styles.content}>
      <SearchBar onSearch={props.onSearch} />
      <div className={styles.wrapper}>
        <SearchResults
          searchResults={props.searchResults}
          onAdd={props.onAdd}
          errorMsg={props.errorMsg}
        />
        <PlayList
          playlistTracks={props.playlistTracks}
          onRemove={props.onRemove}
          onSave={props.onSave}
          onChange={props.onChange}
          saveMsg={props.saveMsg}
        />
      </div>
    </div>
  );
};

export default MusicSearch;
