import {
  musicRequest,
  musicResponse,
  musicError
} from "../../actions/fetchAction";

export function fetchMusic(inputValue) {
  return dispatch => {
    dispatch(musicRequest());
    fetch(
      `https://orion.apiseeds.com/api/music/search/?q=${inputValue}&apikey=TTAxFFMk2RVmqsMpI2OObfFnYcWqV3rnsjMiSC7ZUlOjms9z4oADgMHmJIWX3yOL`
    )
      .then(res => res.json())
      .then(res => {
        if (res.success === false) {
          return Promise.reject(new Error("Not found"));
        }
        return Promise.resolve(res);
      })
      .then(data => {
        dispatch(
          musicResponse(
            data.result.filter(track =>
              track.title.toUpperCase().includes(inputValue.toUpperCase())
            )
          )
        );
      })
      .catch(err => {
        dispatch(musicError(err.message));
      });
  };
}
