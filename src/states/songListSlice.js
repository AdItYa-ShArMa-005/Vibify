import {createSlice} from "@reduxjs/toolkit";

const songListSlice = createSlice({
    name : "songList",
    initialState : {value : []},
    reducers : {
        setInitialList : ((state,action) => {
            state.value = action.payload;
        }),
 
        setSongList : (state,action) => {
            state.value = action.payload;
        }
    }
});

export const {setSongList, setInitialList} = songListSlice.actions;
export default songListSlice.reducer;
