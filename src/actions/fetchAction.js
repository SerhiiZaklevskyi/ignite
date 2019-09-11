export const MUSIC_REQUEST = "MUSIC_REQUEST";
export const MUSIC_RESPONSE = "MUSIC_RESPONSE";
export const MUSIC_ERROR = "MUSIC_ERROR";
export const GET_INPUT = "GET INPUT";
export const CLEAR_RESULTS = "CLEAR_ERROR";

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

export function getInput(input) {
  return {
    type: GET_INPUT,
    payload: input
  };
}

export function clearResults() {
  return {
    type: CLEAR_RESULTS
  };
}
