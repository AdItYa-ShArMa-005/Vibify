import {createSlice} from "@reduxjs/toolkit";
import songs from "../components/song_pool";

const songListSlice = createSlice({
    name : "songList",
    initialState : {value : songs},
    reducers : {
        setSongList : (state,action) => {
            state.value = action.payload;
        }
    }
});

export const {setSongList} = songListSlice.actions;
export default songListSlice.reducer;