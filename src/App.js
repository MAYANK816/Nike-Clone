import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Course from './Components/Course'
import Home from './Components/Home'
import Login from './Components/Login'
const App = () => {
  return (
    <Router>
    <div className='App'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/course/:id' element={<Course/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App