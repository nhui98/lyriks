import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "@store/services/shazamCore.types";

interface PlayerState {
  currentSongs: Song[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: Song | null;
  genreListId: string;
}

const initialState: PlayerState = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  activeSong: null,
  genreListId: "",
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setActiveSong: (
      state,
      action: PayloadAction<{ song: Song; i: number; data: Song[] }>
    ) => {
      state.activeSong = action.payload.song;

      // if (action.payload?.data?.tracks?.hits) {
      //   state.currentSongs = action.payload.data.tracks.hits;
      // } else if (action.payload?.data?.properties) {
      //   state.currentSongs = action.payload?.data?.tracks;
      // } else {
      //   state.currentSongs = action.payload.data;
      // }
      state.currentSongs = action.payload.data;

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action: PayloadAction<number>) => {
      // if (state.currentSongs[action.payload]?.track) {
      //   state.activeSong = state.currentSongs[action.payload]?.track;
      // } else {
      //   state.activeSong = state.currentSongs[action.payload];
      // }

      state.activeSong = state.currentSongs[action.payload];

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action: PayloadAction<number>) => {
      // if (state.currentSongs[action.payload]?.track) {
      //   state.activeSong = state.currentSongs[action.payload]?.track;
      // } else {
      //   state.activeSong = state.currentSongs[action.payload];
      // }
      state.activeSong = state.currentSongs[action.payload];

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    // selectGenreListId: (state, action) => {
    //   state.genreListId = action.payload;
    // },
  },
});

export const {
  setActiveSong,
  nextSong,
  prevSong,
  playPause,
  // selectGenreListId,
} = playerSlice.actions;

export default playerSlice.reducer;
