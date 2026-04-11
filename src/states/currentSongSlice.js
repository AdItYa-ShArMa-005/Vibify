import { createSlice } from "@reduxjs/toolkit";
import songs from '../components/song_pool';

const currentSongSlice = createSlice({
    name : "currentSong",
    initialState : {value : {
  title: "Malang",
  singers: ["Ved Sharma"],
  mood: ["Dance", "Feel good"],
  year: 2020,
  album: "Malang",
  duration: "4:37",
  language: "Hindi",
  thumbnail: "https://i.ytimg.com/vi/KBIq11mNB0I/hqdefault.jpg",
  timeStamp: "6:20 PM",
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