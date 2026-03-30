import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";
import { useState } from "react";
import songs from "./song_pool";
const MainArea = () =>
{
  const[currentSong, setCurrentSong] = useState(songs[0]);
  
    return(
          <div className="flex-[4] flex">
            <LeftPanel/>
            <CenterPanel songs={songs} setCurrentSong={setCurrentSong}/>
            <RightPanel currentSong={currentSong}/>
      </div>
    )
}
export default MainArea;