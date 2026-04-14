import { configureStore } from '@reduxjs/toolkit';
import songListReducer from "../states/songListSlice";
import songCategoryReducer from "../states/songCategorySlice";
import currentSongReducer from "../states/currentSongSlice";
import likedSongReducer from "../states/likedSongsSlice";
import songPoolReducer from '../states/songpoolSlice';

export const store = configureStore({
    reducer: {
        songList : songListReducer,
        Category : songCategoryReducer,
        currentSong : currentSongReducer,
        likedSongs : likedSongReducer,
        songPool : songPoolReducer,        
    }
});

