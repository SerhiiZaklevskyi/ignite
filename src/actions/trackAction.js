export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

export function addTrack(playlistTracks, track) {
  return {
    type: ADD_TRACK,
    playlistTracks: playlistTracks,
    track: track
  };
}

export function removeTrack(playlistTracks) {
  return {
    type: REMOVE_TRACK,
    payload: playlistTracks
  };
}
