import { createSlice } from "@reduxjs/toolkit";
import songs from "../components/song_pool";

const currentSongSlice = createSlice({
    name : "currentSong",
    initialState : {value : songs[0]},
    reducers : {
        setCurrentSong : (state,action) =>{
            state.value = action.payload;
        }
    }
});

export const {setCurrentSong} = currentSongSlice.actions;
export default currentSongSlice.reducer;