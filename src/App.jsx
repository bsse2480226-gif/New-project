import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './components/Hero'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom'
import StudentCard from './components/StudentCard'
import StudentProfile from './components/StudentProfile'
import StudentManager from './components/StudentManager'
import Studentview from './components/Studentview'
import StudentForm from './components/StudentForm'

function App() {
  

  return (
    
    <>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/Studentprofile" element={<StudentProfile />} />
      <Route path='/Studentmanager' element={<StudentManager/>}/>
      <Route path='/studentview/:id' element={<Studentview/>}/>
      <Route path='/studentform' element={<StudentForm/>}/>
    </Routes>
    </>
  )
}

export default App
