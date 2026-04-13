import './App.css'// 
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import Library  from './components/Library';
import Explore  from './components/Explore';
import LikedSongs  from './components/LikedSongs';
import MainArea from './components/MainArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Artists from './components/Artists';
import Languages from './components/Languages';
import Login from './components/Login';
import MusicPlayer from './components/MusicPlayer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home" element={<MainArea/>}></Route>
          <Route path="/Library" element={<Library />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Liked_songs" element={<LikedSongs />} />
          <Route path="/Artists" element={<Artists/>}></Route>
          <Route path="/Languages" element={<Languages/>}></Route>
        </Routes>
        <div className="music">
              <MusicPlayer/>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
