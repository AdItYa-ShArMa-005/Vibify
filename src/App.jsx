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
    <div className="h-screen flex flex-col bg-gradient-to-br from-purple-500 to-indigo-600">
      <Header/>
      <MainArea/>
      <Footer/>
    </div>
  )
}

export default App
