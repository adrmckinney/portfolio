import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import tailwindLogo from '../images/tailwindLogo.svg'
import reactLogo from '../images/reactLogo.svg'
import useDocumentScrollThrottled from './customComponents/useDocumentScrollThrottled'
import MobileNav from './MobileNav'
import SitePoweredBy from './SitePoweredBy'

const Nav = ({ handleScroll }) => {
  const [showSolidNav, setShowSolidNav] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showPowerMenu, setShowPowerMenu] = useState(false)
  const dropdownRef = useRef(null)

  // scroll on click feature
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

  // close menu on window click feature
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setShowMenu(false)
        setShowPowerMenu(false)
      }
    }
    if (showMenu || showPowerMenu) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [showMenu, showPowerMenu])

  // nav btn className
  const navBtnClass = () => {
    return (
      `${showSolidNav ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-blueGray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-xs lg:text-sm font-medium`
    )
  }

  return (
    <>
      <nav className={`${showSolidNav ? 'sm:bg-gray-600' : 'bg-none'}`}>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button--> */}
              <button
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
                ref={dropdownRef}
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
                    className={navBtnClass()}
                    onClick={() => handleScroll('homeRef')}
                  >Home
                  </span>

                  <span
                    className={navBtnClass()}
                    onClick={() => handleScroll('aboutRef')}
                  >About
                  </span>

                  <span
                    className={navBtnClass()}
                    onClick={() => handleScroll('freelanceRef')}
                  >Freelance
                  </span>

                  <span
                    className={navBtnClass()}
                    onClick={() => handleScroll('projectsRef')}
                  >School Projects
                  </span>

                  <span
                    className={navBtnClass()}
                    onClick={() => handleScroll('quickAppsRef')}
                  >Quick Apps
                  </span>

                  <a
                    href='mailto:adrmckinney@gmail.com'
                    className={navBtnClass()}
                    rel='noreferrer'
                    target='_blank'
                  >Email
                  </a>

                  <a
                    href='https://docs.google.com/document/d/16mTFnVdAz4Yb_tHHnhAmusoOGm7T5ujq0kwpJjTTt6Y/edit?usp=sharing'
                    className={navBtnClass()}
                    rel='noreferrer'
                    target='_blank'
                  >Resume
                  </a>

                </div>
              </div>
            </div>
            <span className='hidden lg:flex'>
              <span
                  // ref={dropdownRef}
                className={`${showSolidNav ? 'text-gray-300' : 'text-blueGray-500'} px-2 py-2 rounded-md text-xs lg:text-sm font-medium self-center lg:hidden block`}
              >Site Powered By:
              </span>
              <div className='hidden lg:flex space-x-1'>
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <span className={`${showSolidNav ? 'text-gray-300' : 'text-blueGray-500'} px-2 py-2 rounded-md text-xs lg:text-sm font-medium self-center`}>Site Powered By:</span>

                <a
                  href='https://reactjs.org/'
                  className={`${showSolidNav ? 'text-gray-300 hover:bg-gray-700 hover:text-white' : 'hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium`}
                  rel='noreferrer'
                  target='_blank'
                >
                  <img className='h-8 w-auto' src={reactLogo} alt='react logo' />
                </a>

                <a
                  className={`${showSolidNav ? 'bg-none' : 'bg-gray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium self-center`}
                  href='https://tailwindcss.com/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <img className='h-3 w-auto' src={tailwindLogo} alt='tailwind logo' />
                </a>
              </div>
            </span>

            <div className='hidden sm:block sm:ml-6'>
              <button
                className={`${showSolidNav ? 'text-gray-300 hover:bg-gray-700' : 'text-blueGray-500 hover:bg-blueGray-100'} px-2 py-2 rounded-md text-xs lg:text-sm font-medium self-center lg:hidden block`}
                onClick={() => setShowPowerMenu(showPowerMenu => !showPowerMenu)}
              >Site Powered By:
              </button>
              <Transition
                show={showPowerMenu}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <div
                  className='origin-top-right absolute right-0 mt-6 w-48 rounded-md shadow-lg py-1 bg-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none z-10'
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'
                  ref={dropdownRef}
                >
                  <SitePoweredBy showSolidNav={showSolidNav} />
                </div>
              </Transition>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {showMenu &&
          <MobileNav setShowMenu={setShowMenu} handleScroll={handleScroll} />}

      </nav>

    </>
  )
}

export default Nav
