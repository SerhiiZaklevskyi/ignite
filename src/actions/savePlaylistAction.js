export const SAVE_PLAYLIST = "SAVE_PLAYLIST";
export const REMOVE_MY_TRACK = "REMOVE_MY_TRACK";

export function savePlaylist(playlist) {
  return {
    type: SAVE_PLAYLIST,
    payload: playlist
  };
}

export function removeMyTrack(track) {
  return {
    type: REMOVE_MY_TRACK,
    payload: track
  };
}
