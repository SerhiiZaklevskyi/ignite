import {
  musicRequest,
  musicResponse,
  musicError
} from "../../actions/fetchAction";

export function fetchMusic() {
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
