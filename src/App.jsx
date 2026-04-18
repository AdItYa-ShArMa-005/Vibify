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
import SignUp from './components/SignUp';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/Home/*" element={<MainArea/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
