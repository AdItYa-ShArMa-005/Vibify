import SongCard from "./SongCard";
import {useSelector, useDispatch} from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";
import MoodSection from "./MoodSection";

const CenterPanel = () =>
{ 
    const listsongs = useSelector(state => state.songList.value);
    const dispatch = useDispatch();
    // const allMoods = ["chill", "happy", "romantic", "energetic", "night drive", "sad", "emotional", "warm", "motivational","party", "feel good","soft", "dance", "hype"];
    const allMoods = ["Chill", "Party", "Dance", "Romantic"];

    
    return(
        <div className="centerpanel">
            <h1 className="tagline">Your vibes , your tunes—let the music match your mood</h1>
            
            <p >An infinite personalized mix of the music you love and new discoveries</p>


        {/* recommendation list */}
        
            <div className="song-container">
                <div className="mood-bar">                    
                    {
                        allMoods.map((mood, index) => (
                            <MoodSection key={index} mood={mood} />
                        ))

                    }
                        
                </div>

                <div className="all-songs">
                    <h2>Recommended songs :</h2>
                    <div>
                        {
                        listsongs.map((song, index) => (
                                <button key={index} className="song-button" onClick={() => dispatch(setCurrentSong(song))}>
                                    <SongCard key={song.title.toLowerCase()} song={song}/>
                                </button>
                            ))
                    }
                    </div>
                </div>
            </div>
            

            </div>
       
    )
}
export default CenterPanel;