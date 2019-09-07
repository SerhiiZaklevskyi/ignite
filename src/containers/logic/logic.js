import {
  musicRequest,
  musicResponse,
  musicError
} from "../../actions/fetchAction";

import {addTrack} from "../../actions/trackAction";

export function fetchMusic(inputValue) {
  return dispatch => {
    dispatch(musicRequest());
    fetch("songs.json")
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw data.error;
        }
        dispatch(musicResponse(data));
      })
      .catch(err => {
        dispatch(musicError(err));
      });
  };
}

export function addTracks(playlistTracks, track) {
  return dispatch => {
    dispatch(addTrack(track));
  };
}
