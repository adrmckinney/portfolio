
const MobileNav = ({ setShowMenu, handleScroll }) => {
  return (
    <>
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
              handleScroll('freelanceRef')
            }}
          >Freelance Projects
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
          <br />
          <div className='border' />
          <a
            href='mailto:adrmckinney@gmail.com'
            className='text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            rel='noreferrer'
            target='_blank'
          >Email
          </a>

          <a
            href='https://docs.google.com/document/d/16mTFnVdAz4Yb_tHHnhAmusoOGm7T5ujq0kwpJjTTt6Y/edit?usp=sharing'
            className='text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
            rel='noreferrer'
            target='_blank'
          >Resume
          </a>

        </div>
      </div>
    </>
  )
}

export default MobileNav
