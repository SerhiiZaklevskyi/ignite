import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  search() {
    this.props.onSearch(this.state.inputValue);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <input
          onChange={this.handleChange}
          type='text'
          placeholder='Enter a Song  name'
          className={styles.search}
        />
        <p>
          <button className={styles.search_btn} onClick={this.search}>
            Search
          </button>
        </p>
      </div>
    );
  }
}

export default SearchBar;
