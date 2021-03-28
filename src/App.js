import React, { useRef } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import QuickApps from './components/QuickApps'

function App () {
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const quickAppsRef = useRef()

  const handleScroll = ref => {
    if (ref === 'homeRef') {
      return homeRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'aboutRef') {
      return aboutRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'projectsRef') {
      return projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'quickAppsRef') {
      return quickAppsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='App h-screen'>
      <div className='fixed w-full top-0 z-50'>
        <Nav handleScroll={handleScroll} />
      </div>
      <div
        ref={homeRef}
        className='bg-black bg-close-computer bg-no-repeat bg-contain md:bg-cover bg-center md:bg-center h-screen w-full flex flex-col justify-center items-center'
      >
        <Home />
      </div>
      <div ref={aboutRef} className='bg-blueGray-100 md:h-screen'>
        <About />
      </div>
      <div ref={projectsRef} className='bg-blueGray-100 sm:h-screen'>
        <Projects />
      </div>
      <div ref={quickAppsRef} className='bg-blueGray-100 sm:h-screen'>
        <QuickApps />
      </div>
    </div>
  )
}

export default App
