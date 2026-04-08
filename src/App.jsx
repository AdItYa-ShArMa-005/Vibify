import './App.css'// 
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import Library  from './components/Library';
import Explore  from './components/Explore';
import Playlist  from './components/Playlist';
import MainArea from './components/MainArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<MainArea/>} />
          <Route path="/MainArea" element={<MainArea/>}></Route>
          <Route path="/Library" element={<Library />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Playlist" element={<Playlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
