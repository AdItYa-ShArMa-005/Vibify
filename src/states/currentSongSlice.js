import { createSlice } from "@reduxjs/toolkit";
import songs from '../components/song_pool';

const currentSongSlice = createSlice({
    name : "currentSong",
    initialState : {value : {
    title: "Blinding Lights",
    singers: ["The Weeknd"],
    mood: ["Energetic", "Night Drive"],
    year: 2019,
    album: "After Hours",
    duration: "3:20",
    language: "English",
    thumbnail: "https://i.ytimg.com/vi/4NRXx6U8ABQ/hqdefault.jpg",
    timeStamp: "10:30 PM",
    liked:false
  }},
    reducers : {
        setCurrentSong : (state,action) =>{
            state.value = action.payload;
        }
    }
});

export const {setCurrentSong} = currentSongSlice.actions;
export default currentSongSlice.reducer;