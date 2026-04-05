import {configureStore, current} from '@reduxjs/toolkit';
import songListReducer from "../states/songListSlice";
import songCategoryReducer from "../states/songCategorySlice";
import currentSongReducer from "../states/currentSongSlice";

export const store = configureStore({
    reducer: {
        songList : songListReducer,
        Category : songCategoryReducer,
        currentSong : currentSongReducer        
    }
});
