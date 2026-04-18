import { useSelector } from "react-redux";
import {useState} from 'react';
import LibrarySongCard from "../components/LibrarySongCard";
import SongCard from "./SongCard";
import { setCurrentSong } from "../states/currentSongSlice";
import { useDispatch } from "react-redux";
const Library = () => {
    const songs = useSelector(state => state.songPool.value);
    const[ slide, setSlide] = useState(0);
    const songsPerSlide = 15;
    const start = slide * songsPerSlide;
    const noOfSlides = Math.ceil(songs.length/songsPerSlide); 
    const dispatch=useDispatch();
    return (
        <div className="library">
            <div className="library-header">
                <h2>Your Library</h2>
                <p>All your saved songs, playlists, and albums in one place.</p>
            </div>

            <div className="song-grid">
                {
                   songs.slice(start, start+songsPerSlide).map((song,index)=>(
                      <SongCard key={index} index={index} song={song} start={start} onClick={()=>dispatch(setCurrentSong(song))}/>
                   ))
                }
            </div>
            <div style={{fontSize : 20, color : "white", display : "flex", justifyContent : "center", alignContent : "center", margin : 10, padding : 10, gap : 10}}>
                <button onClick={() => setSlide(slide-1)} disabled={slide === 0}>➖</button> 
                <div style={{border : 2, borderColor : "black", borderStyle : "solid"}}><p> {slide+1} / {noOfSlides} </p></div>
                <button onClick={() => setSlide(slide+1)} disabled={slide+1 === noOfSlides}>➕</button>
            </div>
        </div>
    )
}
export default Library;