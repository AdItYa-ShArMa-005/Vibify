import SongCard from "./SongCard";
import  songs  from "./song_pool";
import chill from "../images/chill.jpeg";
import focus from "../images/focus.jpeg";
import  flow from "../images/flow.png";
import sad from "../images/sad.jpeg";
import workout from "../images/workout.jpeg";
// import MusicPlayer from "./MusicPlayer";
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
    function songHandler(id){
         const selectedCategory = id;
         dispatch(setCategory(selectedCategory));
         selectedCategory !== "None" ?
         dispatch(setSongList(songs.filter(song => song.mood.includes(selectedCategory))))
                            :
         dispatch(setSongList(songs.filter(song => calculateDifference(song.timeStamp))))
    }
    
    return(
        <div className="centerpanel">
            <h1 className="tagline">Your vibes , your tunes—let the music match your mood</h1>
            
            <p >An infinite personalized mix of the music you love and new discoveries</p>


        {/* recommendation list */}
        
            <div className="song-container">
                <div className="mood-icons">
                    {/* <h2>Recommended songs :</h2>

                    */ }
                    
                        {/* <label>Select mood : </label>
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
                     */}
                         <div className="flow">
                            <img src={flow} alt="" id="flow" onClick={()=>songHandler("Flow")}/>
                        </div>
                        <div className="Motivational">
                            <img src={workout} alt="" id="motivation" onClick={()=>songHandler("Motivational")}></img>
                        </div>
                        {/* <div className="party">
                            <img src="" alt="" />
                        </div> */}
                        <div className="chill">
                            <img src={chill} alt="" id="chill" onClick={()=>songHandler("Chill")}/>
                        </div> 
                       <div className="sad">
                            <img src={sad} alt="" id="sad" onClick={()=>songHandler("Sad")}/>
                        </div>
                        <div className="focus">
                            <img src={focus} alt="" id="feel good" onClick={()=>songHandler("Feel Good")}/>
                        </div>
                        {/* <div className="love">
                            <img src="" alt="" />
                        </div>
                        <div className="focus">
                            <img src={focus} alt="" />
                        </div>
                        <div className="romantic">
                            <img src="" alt="" />
                        </div> */}
                        {/* <div className="Night Dive">
                            <img src="" alt="" />
                        </div>
                        <div className="Warm">
                            <img src="" alt="" />
                        </div>
                        <div className="Soft">
                           <img src="" alt="" />   
                        </div>
                        
                        <div className="Dance">
                            <img src="" alt="" />
                        </div>
                        <div className="Energetic">
                            <img src="" alt="" />
                        </div> 
         */}

{/* 
                    </div> */}
                        
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