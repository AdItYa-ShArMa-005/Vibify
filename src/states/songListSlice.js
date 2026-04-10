import {createSlice} from "@reduxjs/toolkit";

const songListSlice = createSlice({
    name : "songList",
    initialState : {value : []},
    reducers : {
        setSongList : (state,action) => {
            state.value = action.payload;
        }
    }
});

export const {setSongList} = songListSlice.actions;
export default songListSlice.reducer;