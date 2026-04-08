import SongCard from "./SongCard";
import {useSelector, useDispatch} from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";
import MoodSection from "./MoodSection";
import { useEffect, useState } from "react";

const CenterPanel = () =>
{ 
    const listsongs = useSelector(state => state.songList.value);
    const dispatch = useDispatch();
    const allMoods = ["Chill", "Happy", "Romantic", "Energetic", "Night Drive", "Sad", "Emotional", "Warm", "Motivational","Party", "Feel Good","Soft", "Dance", "Hype"];
    const[slide,setSlide] = useState(0);

    const moodPerSlide = 4;
    const starting = moodPerSlide * slide ;
    const end = moodPerSlide*(slide + 1);
    const noOfSlides = Math.ceil(allMoods.length/moodPerSlide);

    // useEffect(() => {
    //     setSlide(0);
    //     noOfSlides = Math.ceil(allMoods.length/moodPerSlide);
    // },[allMoods]);

    
    return(
        <div className="centerpanel">
            <h1 className="tagline">Your vibes , your tunes—let the music match your mood</h1>
            
            <p >An infinite personalized mix of the music you love and new discoveries</p>


        {/* recommendation list */}
        
            <div className="song-container">
                <div className="mood-bar">  
                    <button className="prv-btn" onClick={() => setSlide(slide-1)} disabled={slide === 0}>Prv</button>   
                    <button className="mood-icons" onClick={() => {}}>
                        <img src={`/images/flow.png`} alt={"surprise me!!"} />
                    </button>
                    {
                        allMoods.slice(starting,end).map((mood, index) => (
                            <MoodSection key={index} mood={mood} />
                        ))

                    }
                    <button className="nxt-btn" onClick={() => setSlide(slide+1)} disabled={slide === noOfSlides-1}>Next</button>                

                        
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