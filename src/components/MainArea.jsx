import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import MusicPlayer from "./MusicPlayer";
import songs from "./song_pool";
import { useSelector } from "react-redux";
import Initialize from "./initialize";

const MainArea = () =>
{  

    // const category = useSelector(state => state.Category.value);
    // const songList = useSelector(state => state.songList.value);
    // const currentSong = useSelector(state => state.currentSong.value);
    // const likedSong = useSelector(state => state.likedSongs.value);
    // const songPool = useSelector(state => state.songPool.value);
    //     console.log("Category : " + category);
    //     console.log("SongList : " + songList);
    //     console.log("CurrentSong : " + currentSong);
    //     console.log("Liked songs : " + likedSong);
    //     console.log("Song pool : " + songPool);
    return(
      <div className="main-content">
            <div className="content">
              <Initialize/>
             <LeftPanel/>
              <CenterPanel/>
            </div>
            {/* <RightPanel/> */}
           
      </div>
    )
}
export default MainArea;
