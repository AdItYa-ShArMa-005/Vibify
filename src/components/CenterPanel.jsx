import SongCard from "./SongCard";
import {useSelector, useDispatch} from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";
import MoodSection from "./MoodSection";
import {useState} from 'react';
const CenterPanel = () =>
{ 
    const [slide,setSlide]=useState(0);
    const listsongs = useSelector(state => state.songList.value);
    const dispatch = useDispatch();
    const allMoods = ["Flow","Chill", "Party", "Romantic","Focus","Warm","Sad","Dance","Motivational"];

    const moodsPerSlide = 5;
    const start = slide * moodsPerSlide;
    const end = (slide + 1) * moodsPerSlide;
    const noOfSlides = Math.ceil(allMoods.length / moodsPerSlide) ;

    const VisibleMoods= allMoods.slice(start,end);

    return(
        <div className="centerpanel">
            <h1 className="tagline">Your vibes , your tunes—let the music match your mood</h1>
            
            <p>An infinite personalized mix of the music you love and new discoveries</p>

        
            <div className="song-container">
                <div className="mood-bar"> 
                    <div className="toggle-btn">
                        {   
                            <button onClick={() =>setSlide(slide-1)}  disabled={slide === 0} className="toggle-slide">❮</button>  
                        }    
                    </div>            
                    <div className="mood-section">
                        {  
                        VisibleMoods.map((mood, index) => (
                            <MoodSection key={index} mood={mood} />
                        ))
                    }
                    </div>
                    <div className="toggle-btn">
                        { 
                            <button onClick={() => setSlide(slide+1)} disabled={slide+1 === noOfSlides} className="toggle-slide">❯</button>
                        }
                    </div>
                   

                        
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