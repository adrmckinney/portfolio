import React, { useRef, useState } from 'react'
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
  const [image, setImage] = useState('')

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
      <div className='fixed w-full top-0 z-10'>
        <Nav handleScroll={handleScroll} />
      </div>
      <span>
        {/* <div className='bg-white bg-opacity-40 w-full h-full absolute inset-0' /> */}
        <div
          ref={homeRef}
          className='bg-moon bg-no-repeat bg-cover bg-center sm:bg-center h-screen w-full flex flex-col justify-center items-center'
        >
          <Home />
        </div>
      </span>
      <div ref={aboutRef} className='bg-indigo-200 h-screen'>
        <About />
      </div>
      <div ref={projectsRef} className='bg-blueGray-100 h-screen'>
        <Projects />
      </div>
      <div ref={quickAppsRef} className='bg-purple-300 h-screen'>
        <QuickApps />
      </div>
    </div>
  )
}

export default App
