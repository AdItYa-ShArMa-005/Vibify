import { useDispatch } from "react-redux";
import { toggleLike } from "../states/songpoolSlice";

const ArtistsCard = ({ artist, index, start }) => {
  const dispatch = useDispatch();

  return (
    <div className="song-card">
      
      <div className="song-left">
        <span className="song-index">{start + index + 1}</span>

        <img
          src={"/images/info.png"}
          alt="thumbnail"
          className="song-img"
        />

        <div>
          <h4>{artist.singer}</h4>
          <p>Songs : {artist.count}</p>
        </div>
      </div>


    </div>
  );
};

export default ArtistsCard;