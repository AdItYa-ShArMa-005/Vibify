import { useSelector,useDispatch } from "react-redux";
import SongCard from "./SongCard";
import { setCurrentSong } from "../states/currentSongSlice";
import { setCategory } from "../states/songCategorySlice";
import { useEffect, useState } from "react";
const LikedSongs = () => {
    const[likedSongs,setLikedSongs] = useState([]);
    const songPool = useSelector(state => state.songPool.value);
    useEffect(() => {
        setLikedSongs(songPool.filter(song => song.liked));
    },[]);

    useEffect(() => {
        setLikedSongs(songPool.filter(song => song.liked));
    },[songPool]);
    const category = useSelector(state => state.Category.value);
    const dispatch = useDispatch();

    const handleClick = (song) => {
        if(category !== "likedSongs")
            dispatch(setCategory("likedSong"));
        dispatch(setCurrentSong(song));

    }
    const[ slide, setSlide] = useState(0);
     const songsPerSlide = 15;
    const start = slide * songsPerSlide;
    const noOfSlides = Math.ceil(likedSongs.length/songsPerSlide); 

    return(
        <div>
            <h2>Liked Songs: </h2>
            {
                likedSongs.slice(start, start+songsPerSlide).map((song, index) => (
                                <button key={index} className="song-button" onClick={() => handleClick(song)}>
                                    <SongCard key={song.title.toLowerCase()} song={song}/>
                                </button>
                            ))
            }
            <div style={{fontSize : 20, color : "white", display : "flex", justifyContent : "center", alignContent : "center", margin : 10, padding : 10, gap : 10}}>
                <button onClick={() => setSlide(slide-1)} disabled={slide === 0}>➖</button> 
                <div style={{border : 2, borderColor : "black", borderStyle : "solid"}}><p> {slide+1} / {noOfSlides} </p></div>
                <button onClick={() => setSlide(slide+1)} disabled={slide+1 === noOfSlides}>➕</button>
            </div>
        </div>
    )
}

export default LikedSongs;