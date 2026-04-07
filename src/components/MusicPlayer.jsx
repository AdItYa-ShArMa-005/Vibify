import { useSelector, useDispatch } from "react-redux";
import { setCurrentSong } from "../states/currentSongSlice";

const  MusicPlayer = () => {

    const song = useSelector(state => state.currentSong.value);
    const songList = useSelector(state => state.songList.value);
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

            <div className="additional-buttons  ">
                <button className="heart-icon"> ❤️ </button>
                <button className="info">ℹ</button>
                <button className="sound">🔊</button>
                <button className="expand">↖</button>
            </div>
        
        </div>
    )
}

export default MusicPlayer;