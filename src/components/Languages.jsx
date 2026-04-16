import {  useDispatch } from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";

// import { toggleLike } from "../states/songpoolSlice";

import { useSelector } from "react-redux";
import SongCard from "../components/SongCard";
function Languages(){
    const songs=useSelector((state)=>state.songPool.value);
    const languages=["English","Spanish","Instrumental","Hindi","Punjabi","Telugu","Tamil","Korean","French","Arabic"];
    return(
       <div className="language">
        <h1>Explore different set of languages at one place</h1>
        {
            languages.map((lang,index)=>{
               
                const list=songs.filter((song)=>song.language==lang);
                return(
                    <div className="lang-container">

                    <h2 className="lang">{lang}</h2>
                    <div className="song-grid">
                        {list.map((s,index)=><SongCard key={index} song={s} onClick={()=>useDispatch(setCurrentSong(s))}/>)}
                    </div>
                    
                    </div>
                    
                )
            })
        }
        </div> 
    )
//  English
// Spanish
// Instrumental
// Hindi
// Punjabi
// Telugu
// Tamil
// Korean
// French
// Arabic
        
    
}
export default Languages;