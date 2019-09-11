export const SAVE_PLAYLIST = "SAVE_PLAYLIST";

export function savePlaylist(playlist) {
  return {
    type: SAVE_PLAYLIST,
    payload: playlist
  };
}
