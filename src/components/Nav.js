import tailwindLogo from '../images/tailwindLogo.svg'
import reactLogo from '../images/reactLogo.svg'
import { useState } from 'react'
import useDocumentScrollThrottled from './customComponents/useDocumentScrollThrottled'

const Nav = ({ handleScroll, navHighlight }) => {
  const [showSolidNav, setShowSolidNav] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const MINIMUM_SCROLL = 0
  const TIMEOUT_DELAY = 0

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShowSolidNav(currentScrollTop > 2)

    setTimeout(() => {
      setShowSolidNav(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  return (
    <>
      <nav className={`${showSolidNav ? 'sm:bg-gray-800' : 'bg-none'}`}>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button--> */}
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                onClick={() => setShowMenu(!showMenu)}
              >
                <span className='sr-only'>Open main menu</span>

                <svg
                  className={`${showMenu ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                </svg>

                <svg
                  className={`${showMenu ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>

              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                  <span
                    className={`${showSolidNav ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-blueGray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => handleScroll('homeRef')}
                  >Home
                  </span>

                  <span
                    className={`${showSolidNav ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-blueGray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => handleScroll('aboutRef')}
                  >About
                  </span>

                  <span
                    className={`${showSolidNav ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-blueGray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => handleScroll('projectsRef')}
                  >School Projects
                  </span>

                  <span
                    href='#'
                    className={`${showSolidNav ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-blueGray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium`}
                    onClick={() => handleScroll('quickAppsRef')}
                  >Quick Apps
                  </span>
                </div>
              </div>
            </div>
            <div className='hidden sm:block sm:ml-6'>
              <div className='flex space-x-1'>
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <span className={`${showSolidNav ? 'text-gray-300' : 'text-blueGray-500'} px-2 py-2 rounded-md text-sm font-medium self-center`}>Site Powered By:</span>

                <a
                  href='https://reactjs.org/'
                  className={`${showSolidNav ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium`}
                  rel='noreferrer'
                  target='_blank'
                >
                  <img className='h-8 w-auto' src={reactLogo} alt='react logo' />
                </a>

                <a
                  className={`${showSolidNav ? 'bg-gray-500' : 'bg-gray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium self-center`}
                  href='https://tailwindcss.com/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <img className='h-3 w-auto' src={tailwindLogo} alt='tailwind logo' />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {showMenu &&
          <div className='sm:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white'>
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

              <span
                className='text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => {
                  setShowMenu(false)
                  handleScroll('homeRef')
                }}
              >Home
              </span>

              <span
                className='text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => {
                  setShowMenu(false)
                  handleScroll('aboutRef')
                }}
              >About
              </span>

              <span
                className='text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => {
                  setShowMenu(false)
                  handleScroll('projectsRef')
                }}
              >School Projects
              </span>

              <span
                className='text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => {
                  setShowMenu(false)
                  handleScroll('quickAppsRef')
                }}
              >Quick Apps
              </span>
            </div>
          </div>}

      </nav>

    </>
  )
}

export default Nav
