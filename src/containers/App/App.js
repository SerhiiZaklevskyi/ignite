import React from "react";
import MusicSearch from "../../components/MusicSearch/MusicSearch";
import styles from "./App.module.css";
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer";
import MyPlaylists from "../../components/MyPlaylists/MyPlaylists";
import {BrowserRouter, Route} from "react-router-dom";

const App = props => {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header />
        <Route exact path='/' component={MusicSearch} />
        <Route path='/MyPlaylists' component={MyPlaylists} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
