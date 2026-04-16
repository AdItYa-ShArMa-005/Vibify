import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import MusicPlayer from "./MusicPlayer";
import Initialize from "./initialize";
import  Header  from './Header';
import  Footer  from './Footer';
import Library  from './Library';
import Explore  from './Explore';
import LikedSongs  from './LikedSongs';
import Artists from './Artists';
import Languages from './Languages';
import {Routes, Route} from 'react-router-dom';

const MainArea = () =>
{  

    return(
      <div>
        <Initialize />
        <Header/>
        <Routes>
          <Route path="/" element={<CenterPanel/>} />
          <Route path="Library" element={<Library />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="Liked_songs" element={<LikedSongs />} />
          <Route path="Artists" element={<Artists/>}></Route>
          <Route path="/Languages" element={<Languages/>}></Route>
        </Routes>
        <MusicPlayer/>
        <Footer/>
      </div>
    )
}
export default MainArea;
//  <div className="main-content">
//             <div className="content">
//               <Initialize/>
//               <CenterPanel/>
//             </div>
//             <div className="music">
//               <MusicPlayer/>
//             </div>
//       </div>