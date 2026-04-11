import { createSlice } from '@reduxjs/toolkit';

const likedSongSlice = createSlice({
    name : "likedSong",
    initialState : { value : []},
    reducers : {

        setInitialLiked : ((state,action) => {
            state.value = action.payload;
        }),

        setLikeSong : ((state,action) => {
            state.value = [...state.value , action.payload];
        }),

        setDislikeSong :((state,action) => {
            state.value = state.value.filter(song => song !== action.payload);
        }),

    } 
});

export const { setLikeSong , setDislikeSong, setInitialLiked } = likedSongSlice.actions;
export default likedSongSlice.reducer;