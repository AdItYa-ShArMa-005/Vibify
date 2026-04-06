
export default function MusicPlayer({song}){
    return(
        <div className="musicplayer">
            <div className="description" >
                <div className="image">
                <img src={song.thumbnail} alt="pic"></img>
                </div>
                <div className="song-desc">
                   <div> {song.title}</div>
                    <div>{song.singers}</div>
                </div>
            </div>
            <div className="buttons">
                <button>Left</button>
                <button>Stop</button>
                <button>Right</button>
            </div>
            <div className="information">
                <div className="song-duration">{`0.00/${song.duration}`}</div>
                <div className="heart-icon"> Heart icon </div>
                <div className="info">info</div>
                <div className="sound">sound</div>
                <div className="expand">expand</div>
            </div>
        
        </div>
    )
}
