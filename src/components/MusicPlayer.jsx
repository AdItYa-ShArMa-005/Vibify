import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";
import {useState} from 'react';
import { setLikeSong, setDislikeSong } from "../states/likedSongsSlice";

const  MusicPlayer = () => {

    const song = useSelector(state => state.currentSong.value);
    const songList = useSelector(state => state.songList.value);
    const [liked,setLiked]=useState(false);
    const [message,setMessage]=useState("");
    const dispatch = useDispatch();


    const nextSong = () => {
        let index = songList.indexOf(song);
        if(index === songList.length-1)
            return;
        else
            dispatch(setCurrentSong(songList[index+1]))
    }

    const prvSong = () => {
        let index = songList.indexOf(song);
        if(index === 0)
            return;
        else
            dispatch(setCurrentSong(songList[index-1]))
    }
    const toggleLike = () => {
        if(liked) setMessage("Song removed from Library");
        else setMessage("Song added to Library 🎵")

        if(liked)
            dispatch(setDislikeSong(song));
        else
            dispatch(setLikeSong(song));
        setLiked(!liked);
        setTimeout(()=>{
            setMessage("");
        },2000);



    }
    return(
        <div className="musicplayer">
            <div className="description" >
                <div className="image">
                    <img src={song.thumbnail} alt="pic"></img>
                </div>
                <div className="song-desc">
                   <div> {song.title}</div>
                    <div>{song.singers.join(', ')}</div>
                </div>
            </div>
            
            <div className="information">
                <div className="progress-bar">
                    <div className="outer">
                        <div className="inner"></div>
                    </div>
                    <div className="song-duration">{`0.00/${song.duration}`}</div>

                </div>

                <div className="control-buttons">
                    <button onClick={prvSong}>⏮</button>
                    <button>▶</button>
                    <button onClick={nextSong}>⏭</button>
                </div>
            </div>
            {/* <div className="mess">
                {
                    message && <div className="toast">{message}</div>
                }
            </div> */}
            <div className="additional-buttons  ">
                <button className="heart-icon" onClick={toggleLike}>  {liked ? "❤️" : "🤍" } </button>
                <img src="/images/info.png" className="info"></img>
                <img src="/images/noise.png" className="noise"></img>
                <img src="/images/expand.png" className="expand"></img>
                
                
               
            </div>
        
        </div>
    )
}

export default MusicPlayer;