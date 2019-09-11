import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.input = React.createRef();
  }

  componentDidMount() {
    this.input.current.focus();
  }

  search() {
    this.props.search(this.props.inputValue);
    this.props.newSearch();
    this.props.clearResults();
  }
  handleKeyPress(event) {
    if (event.key === "Enter") {
      this.search();
    }
  }

  handleChange(event) {
    this.props.getInput(event.target.value);
  }

  render() {
    return (
      <div className={styles.searchBar}>
        <input
          ref={this.input}
          type='text'
          placeholder='Enter a Song  name'
          className={styles.search}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
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
