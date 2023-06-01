import { create } from "zustand";

const useSongStore = create((set) => ({
  songStatic: [],
  setSongStatic: (Songs) =>
    set((store) => ({
      songStatic: [...Songs],
    })),
  setAddSongStatic: (songStatic) =>
    set((store) => ({
      songStatic: [...store.songStatic, songStatic],
    })),

  setEditSongStatic: (songStatic) =>
    set((store) => ({
      songStatic: store.songStatic.map((song) =>
        song.id === songStatic.id ? songStatic : song
      ),
    })),
}));

export default useSongStore;
