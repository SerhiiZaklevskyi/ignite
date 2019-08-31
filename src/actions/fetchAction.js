export const MUSIC_REQUEST = "MUSIC_REQUEST";
export const MUSIC_RESPONSE = "MUSIC_RESPONSE";
export const MUSIC_ERROR = "MUSIC_ERROR";
export const INPUT_HANDLE = "INPUT_HANDLE";

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
