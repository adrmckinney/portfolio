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
      return aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else if (ref === 'projectsRef') {
      return projectsRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (ref === 'quickAppsRef') {
      return quickAppsRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='App h-screen'>
      <div className='fixed w-full top-0'>
        <Nav handleScroll={handleScroll} />
      </div>
      <div ref={homeRef} className='bg-blue-500 h-screen'>
        <Home />
      </div>
      <div ref={aboutRef} className='bg-green-500 h-screen'>
        <About />
      </div>
      <div ref={projectsRef} className='bg-blueGray-500 h-screen'>
        <Projects />
      </div>
      <div ref={quickAppsRef} className='bg-purple-500 h-screen'>
        <QuickApps />
      </div>
    </div>
  )
}

export default App
