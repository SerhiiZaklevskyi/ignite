export const MUSIC_REQUEST = "MUSIC_REQUEST";
export const MUSIC_RESPONSE = "MUSIC_RESPONSE";
export const MUSIC_ERROR = "MUSIC_ERROR";
export const GET_INPUT = "GET INPUT";

export function musicRequest() {
  return {
    type: MUSIC_REQUEST
  };
}

export function musicResponse(music) {
  return {
    type: MUSIC_RESPONSE,
    payload: music
  };
}

export function musicError(error) {
  return {
    type: MUSIC_ERROR,
    payload: error
  };
}

export function getInput(inputValue) {
  return {
    type: GET_INPUT,
    payload: inputValue
  };
}
