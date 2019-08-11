import React from "react";
import styles from "./MusicSearch.module.css";

import SearchBar from "./SearchBar/SearchBar";
import SearchResults from "./SearchResults/SearchResults";
import PlayList from "./PlayList/PlayList";

class MusicSearch extends React.Component {
  render() {
    return (
      <div>
        <SearchBar onSearch={this.props.onSearch} />
        <div className={styles.wrapper}>
          <SearchResults
            searchResults={this.props.searchResults}
            onAdd={this.props.onAdd}
          />
          <PlayList
            playlistTracks={this.props.playlistTracks}
            onRemove={this.props.onRemove}
            onSave={this.props.onSave}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default MusicSearch;
