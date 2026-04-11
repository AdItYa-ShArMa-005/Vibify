import { useSelector,useDispatch } from "react-redux";
import SongCard from "./SongCard";
import { setCurrentSong } from "../states/currentSongSlice";
import { setCategory } from "../states/songCategorySlice";
const LikedSongs = () => {
    const likedSongs = useSelector(state => state.likedSongs.value);
    const category = useSelector(state => state.Category.value);
    const dispatch = useDispatch();

    const handleClick = (song) => {
        if(category !== "likedSongs")
            dispatch(setCategory("likedSong"));
        dispatch(setCurrentSong(song));

    }

    return(
        <div>
            <h2>Liked Songs: </h2>
            {
                likedSongs.map((song, index) => (
                                <button key={index} className="song-button" onClick={() => handleClick(song)}>
                                    <SongCard key={song.title.toLowerCase()} song={song}/>
                                </button>
                            ))
            }
        </div>
    )
}

export default LikedSongs;