import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Herosection/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  )
}

export default App
