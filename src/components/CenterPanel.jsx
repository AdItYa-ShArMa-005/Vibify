import SongCard from "./SongCard";
import  songs  from "./song_pool";
import {useSelector, useDispatch} from "react-redux";
import { setSongList } from "../states/songListSlice";
import { setCategory } from "../states/songCategorySlice";
import { setCurrentSong } from "../states/currentSongSlice";

const CenterPanel = () =>
{ 
    const listsongs = useSelector(state => state.songList.value);
    const category = useSelector(state => state.Category.value);
    const dispatch = useDispatch();
    const formattedTime = new Date().toLocaleTimeString("en-US", {hour: "numeric", minute: "2-digit", hour12: true});
    const allMoods = ["Chill", "Happy", "Romantic", "Energetic", "Night Drive", "Sad", "Emotional", "Warm", "Motivational","Party", "Feel Good","Soft", "Dance", "Hype"];
    function convertToMinutes(timeStr) {
        let [time, modifier] = timeStr.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) {
            hours += 12;
        }
        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }

        return hours * 60 + minutes;
    }
    // help needed here.
    // dispatch(setSongList(songs.filter(song => calculateDifference(song.timeStamp))));

    function calculateDifference(songTime) {
            const currentMinutes = convertToMinutes(formattedTime);
            const songMinutes = convertToMinutes(songTime);

            let diff = Math.abs(currentMinutes - songMinutes);

            // handle edge case (midnight wrap)
            diff = Math.min(diff, 1440 - diff);

            return diff <= 120; // 2 hours = 120 mins
    }
    return(
        <div className="centerpanel">
            <h1 className="tagline">Your vibes , your tunes—let the music match your mood</h1>
            
            <p >An infinite personalized mix of the music you love and new discoveries</p>


        {/* recommendation list */}
        
            <div className="song-container">
                <div className="song-container-top">
                    <h2>Recommended songs :</h2>
                    <div>
                        <label>Select mood : </label>
                        <select name="category" value={category} onChange={(e) => {
                            const selectedCategory = e.target.value;
                            dispatch(setCategory(selectedCategory));
                            selectedCategory !== "None" ?
                            dispatch(setSongList(songs.filter(song => song.mood.includes(selectedCategory))))
                            :
                            dispatch(setSongList(songs.filter(song => calculateDifference(song.timeStamp))))
                        }}>
                            <option value="None">None</option>
                            {
                                allMoods.map((mood, index) => (
                                    <option key={index} value={mood}>{mood}</option>
                                ))  
                            }
                        </select>
                    </div>
                        
                </div>
                {
                        
                }
                <div className="all-songs">
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
    )
}
export default CenterPanel;