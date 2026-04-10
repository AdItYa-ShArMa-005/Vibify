import { useSelector } from "react-redux";
import SongCard from "./SongCard";

const LikedSongs = () => {
    const likedSongs = useSelector(state => state.likedSongs.value);

    return(
        <div>
            <h2>Liked Songs: </h2>
            {
                likedSongs.map((song, index) => (
                                <button key={index} className="song-button" onClick={() => dispatch(setCurrentSong(song))}>
                                    <SongCard key={song.title.toLowerCase()} song={song}/>
                                </button>
                            ))
            }
        </div>
    )
}

export default LikedSongs;