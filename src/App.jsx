import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Herosection/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      {/* <Projects /> */}
      <Contact />

      <ScrollToTop />
    </div>
  )
}

export default App
