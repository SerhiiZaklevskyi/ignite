export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";
export const PLAYLIST_SAVED = "PLAYLIST_SAVED";
export const DISPLAY_SAVEMSG = "DISPLAY_SAVEMSG";
export const SAVE_NAME = "SAVE_NAME";
export const NEW_SEARCH = "NEW_SEARCH";

export function addTrack(track) {
  return {
    type: ADD_TRACK,
    payload: track
  };
}

export function removeTrack(track) {
  return {
    type: REMOVE_TRACK,
    payload: track
  };
}

export function SaveMsgDisplay(saveMsg) {
  return {
    type: DISPLAY_SAVEMSG,
    payload: saveMsg
  };
}

export function saveName(name) {
  return {
    type: SAVE_NAME,
    payload: name
  };
}

export function clearPlaylist() {
  return {
    type: PLAYLIST_SAVED
  };
}

export function newSearch() {
  return {
    type: NEW_SEARCH
  };
}
