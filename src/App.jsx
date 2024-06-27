import React from 'react'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Project from './Components/Project/Project'
import Navbar from './Components/Navbar/Navbar'
import Education from './Components/Education/Education'
import Contactus from './Components/Contactus/Contactus'
import Footer from './Components/Footer/Footer'
import Homepage from './Components/Homepage/Homepage'
import Timeline from './Components/Timeline/Timeline'

const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Skills />
      <Experience />
      <Project />
      <Education />
      <Contactus />
      <Footer />
      <Timeline />
    </div>
  )
}

export default App
