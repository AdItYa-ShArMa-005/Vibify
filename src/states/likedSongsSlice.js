import { createSlice } from '@reduxjs/toolkit';

const likedSongSlice = createSlice({
    name : "likedSong",
    initialState : { value : []},
    reducers : {
        setLikeSong : ((state,action) => {
            state.value = [...state.value , action.payload];
        }),

        setDislikeSong :((state,action) => {
            state.value = state.value.filter(song => song !== action.payload)
        }),

    } 
});

export const { setLikeSong , setDislikeSong } = likedSongSlice.actions;
export default likedSongSlice.reducer;