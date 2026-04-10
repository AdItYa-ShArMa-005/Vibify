import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import MusicPlayer from "./MusicPlayer";
import songs from "./song_pool";
const MainArea = () =>
{  
    return(
      <div className="main-content">
            <div className="content">
             <LeftPanel/>
              <CenterPanel/>
            </div>
            <div className="music">
               <MusicPlayer song={songs[Math.floor(Math.random()*songs.length)]}/>
            </div>
            {/* <RightPanel/> */}
           
      </div>
    )
}
export default MainArea;
