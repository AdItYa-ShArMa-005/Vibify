const SongCard = ({ song }) => {
    return (
        <div className="songcard">
            <img src={song.thumbnail}></img>
            <h3 className="song-title">{song.title}</h3>
            <p className="singer">{song.singers.join(', ')}</p>
        </div>
    );
};
export default SongCard;