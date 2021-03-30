import React, { useRef } from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import QuickApps from './components/QuickApps'
import smoothscroll from 'smoothscroll-polyfill'

smoothscroll.polyfill()

// here's a good site when you want to build the nav highlight on scroll https://codedaily.io/tutorials/Sticky-Header-with-Highlighting-Sections-on-Scroll. . .it'll take some time to implement

function App () {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const quickAppsRef = useRef(null)

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
      <div ref={aboutRef} className='bg-white lg:h-screen'>
        <About />
      </div>
      <div ref={projectsRef} className='bg-white md:h-screen'>
        <Projects />
      </div>
      <div ref={quickAppsRef} className='bg-white sm:h-screen'>
        <QuickApps />
      </div>
      <div className='pb-52 sm:pb-0' />
    </div>
  )
}

export default App
