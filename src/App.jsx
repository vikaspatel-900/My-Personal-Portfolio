import React from 'react'
import Navbar from './components/Navbar'

import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import Project from './pages/Projects/Project'
import Education from './pages/Education/Education'
import Newfooter from './pages/Contact/Newfooter'
import CustomCursor from './components/CustomCursor'


export default function App() {
  return (
    <div>
      <CustomCursor/>
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      {/* <Education/> */}
      <Newfooter/>
      <Footer/>
    </div>
  )
}
