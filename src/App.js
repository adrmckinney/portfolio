import React, { useRef, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import QuickApps from './components/QuickApps'
import ScrollFunction from './components/ScrollFunction'

function App () {
  const homeRef = useRef()
  const aboutRef = useRef()
  const projectsRef = useRef()
  const quickAppsRef = useRef()
  const [showSolidNav, setShowSolidNav] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  ScrollFunction(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShowSolidNav(currentScrollTop > 2)

    setTimeout(() => {
      setShowSolidNav(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

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
        <Nav handleScroll={handleScroll} showSolidNav={showSolidNav} />
      </div>
      <div ref={homeRef} className='bg-coffee-shop bg-no-repeat bg-cover h-screen w-full flex items-center justify-center'>
        <Home />
      </div>
      <div ref={aboutRef} className='bg-indigo-200 h-screen'>
        <About />
      </div>
      <div ref={projectsRef} className='bg-blueGray-500 h-screen'>
        <Projects />
      </div>
      <div ref={quickAppsRef} className='bg-purple-300 h-screen'>
        <QuickApps />
      </div>
    </div>
  )
}

export default App
