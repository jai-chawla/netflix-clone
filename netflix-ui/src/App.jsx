import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Netflix from './pages/Netflix'
import Player from './pages/Player'
import Movies from './pages/Movies'
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
    
        <Route exact path="/signup" element={<Signup/>}/>
     
        <Route exact path="/player" element={<Player/>}/>
        <Route exact path="/movies" element={<Movies/>}/>

        <Route exact path="/tv" element={<TVShows/>}/>
        <Route exact path="/" element={<Netflix/>}/>
        <Route exact path="/mylist" element={<UserLiked/>}/>
      </Routes>
    </BrowserRouter>
  )
}
