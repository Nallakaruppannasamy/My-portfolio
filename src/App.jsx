import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Herosection/Hero'
import About from './components/About/About'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import MyWork from './components/MyWork/MyWork'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <MyWork />
      <Contact />

      <ScrollToTop />
    </div>
  )
}

export default App
