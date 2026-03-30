import { useState } from 'react'
import './App.css'// 
import songs from './components/song_pool';
import  Header  from './components/Header';
import  Footer  from './components/Footer';
import RecommendationList from './components/RecommendationList';
import MainArea from './components/MainArea';
import SideBar from './components/SideBar';

function App() {

  return (
    <div className="App">
      <Header/>
      <MainArea/>
      <Footer/>
    </div>
  )
}

export default App
