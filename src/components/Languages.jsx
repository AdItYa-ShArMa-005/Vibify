import {  useDispatch } from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";

// import { toggleLike } from "../states/songpoolSlice";

import { useSelector } from "react-redux";
import SongCard from "../components/SongCard";
import { useState, useEffect } from "react";
function Languages(){
    const songs=useSelector((state)=>state.songPool.value);
    const languages=["English","Spanish","Instrumental","Hindi","Punjabi","Telugu","Tamil","Korean","French","Arabic"];
    const [lang,setLang] = useState(languages[0]);
    const [list, setList] = useState([]);
    useEffect(() => {
        setList(songs.filter(song => song.language === lang));
    },[]);

    useEffect(() => {
        setList(songs.filter(song => song.language === lang));
    },[lang]);


    return(
       <div className="language">
        <h1>Explore different set of languages at one place</h1>

        <div className="lang-container">
            <select onChange={(e) => setLang(e.target.value)} className="lang">
                {
                    languages.map((ele,index) => <option className="lang-options" key={index} value={ele}>{ele}</option>)
                }
            </select>
        </div>
        <div className="song-grid">
            {
                list.map((s,index)=><SongCard key={index} song={s} onClick={()=>useDispatch(setCurrentSong(s))}/>)
            }
        </div>
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