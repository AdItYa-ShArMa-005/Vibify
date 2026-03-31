export default function MusicPlayer({song}){
    return(
        <div>
            <div>
                <div>
                <img src={song.thumbnail} alt="pic"></img>
                </div>
                <div>
                    {song.title}
                    {song.singer}
                </div>
            </div>
            <div>
                <button>Left</button>
                <button>Stop</button>
                <biutton>Right</biutton>
            </div>
            <div>{`0.00/${song.duration}`}</div>
            <div>
                Heart icon
            </div>
            <div>info</div>
            <div>sound</div>
            <div>expand</div>
        </div>
    )
}