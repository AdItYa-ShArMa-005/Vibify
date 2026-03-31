import {configureStore} from '@reduxjs/toolkit';
import songListReducer from "../states/songListSlice";

export const store = configureStore({
    reducer: {
        songList : songListReducer
    }
});