import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Newfooter from './components/Newfooter'
import Project from './components/Project'
import Socialicon from './components/Socialicon'
import Education from './components/Education'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      
      <Education/>
      <Newfooter/>
      <Footer/>
    </div>
  )
}
