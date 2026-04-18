import { createSlice } from '@reduxjs/toolkit';
import {songs} from '../songs.js';

const songPoolSlice = createSlice({
    name : "songPool",
    initialState : {value : songs},
    reducers : {
        toggleLike: (state, action) => {
          const index = state.value.findIndex(s => s.title === action.payload.title);
          if (index !== -1) {
              state.value[index].liked = !state.value[index].liked;
          }},
        addSong : (state,action) => {
          state.value = [...state.value,action.payload];
          }
      }
});

export const {toggleLike,addSong} = songPoolSlice.actions;
export default songPoolSlice.reducer;