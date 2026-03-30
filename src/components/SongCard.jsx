const SongCard = ({ song,mood }) => {
    return (
        <div className="songcard">
            <img src={song.thumbnail}></img>
            <h3 className="song-title">{song.title}</h3>
            <p className="singer">{song.singers}</p>
            <p>{mood}</p>
        </div>
    );
};
export default SongCard;