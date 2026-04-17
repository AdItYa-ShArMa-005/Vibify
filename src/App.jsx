import './App.css';
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
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Home/*" element={<MainArea/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
