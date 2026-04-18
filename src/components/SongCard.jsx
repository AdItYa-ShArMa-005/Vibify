const SongCard = ({ song ,onClick}) => {
    return (
        <div className="songcard" onClick={onClick}>
            <img src={song.thumbnail}></img>
            <h3 className="song-title">{song.title}</h3>
            <p className="singer">{song.singers.join(', ')}</p>
        </div>
    );
};
export default SongCard;