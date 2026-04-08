import SongCard from "./SongCard";
import {useSelector, useDispatch} from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";
import MoodSection from "./MoodSection";
import {useState} from 'react';
const CenterPanel = () =>
{ 
    const [start,setStart]=useState(0);
    const listsongs = useSelector(state => state.songList.value);
    const dispatch = useDispatch();
    // const allMoods = ["chill", "happy", "romantic", "energetic", "night drive", "sad", "emotional", "warm", "motivational","party", "feel good","soft", "dance", "hype"];
    const allMoods = ["Flow","Chill", "Party", "Romantic","Night drive","Focus","Warm","Sad","Workout","Feel good","Dance","Motivational"];
    const VisibleMoods= allMoods.slice(start,start+5);
    const NextMood=()=>{
        if(start+5<allMoods.length){
            setStart(start+5);
        }
    }
    const PrevMood=()=>{
        if(start-5>=0){
            setStart(start-5);
        }
    }
    return(
        <div className="centerpanel">
            <h1 className="tagline">Your vibes , your tunes—let the music match your mood</h1>
            
            <p>An infinite personalized mix of the music you love and new discoveries</p>


        {/* recommendation list */}
        
            <div className="song-container">
                <div className="mood-bar"> 
                    {   start>0 &&
                        <button onClick={PrevMood}>⬅</button>  
                    }                
                    {  
                        VisibleMoods.map((mood, index) => (
                            <MoodSection key={index} mood={mood} />
                        ))


                    }
                    {
                       start+5<allMoods.length && <button onClick={NextMood}>➡</button>
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