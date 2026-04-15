import { useDispatch } from "react-redux";
import { toggleLike } from "../states/songpoolSlice";

const LibrarySongCard = ({ song, index }) => {
  const dispatch = useDispatch();

  return (
    <div className="song-card">
      
      <div className="song-left">
        <span className="song-index">{index + 1}</span>

        <img
          src={song.thumbnail}
          alt="thumbnail"
          className="song-img"
        />

        <div>
          <h4>{song.title}</h4>
          <p>{song.singers.join(", ")}</p>
        </div>
      </div>

      <div className="song-right">
        <span>{song.duration}</span>

        <span
          className="heart"
          onClick={() => dispatch(toggleLike(index))}
          style={{ color: song.liked ? "red" : "white" }}
        >
          ❤️
        </span>
      </div>

    </div>
  );
};

export default LibrarySongCard;