import tailwindLogo from '../images/tailwindLogo.svg'
import reactLogo from '../images/reactLogo.svg'

const SitePoweredBy = ({ showSolidNav, showPowerMenu, setShowPowerMenu }) => {
  if (showPowerMenu) {
    return (
      <div className='lg:hidden' id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1 bg-white'>
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
    )
  }

  return (
    <>
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
          className={`${showSolidNav ? 'bg-gray-500' : 'bg-gray-500 hover:bg-blueGray-100'} px-3 py-2 rounded-md text-sm font-medium self-center`}
          href='https://tailwindcss.com/'
          rel='noreferrer'
          target='_blank'
        >
          <img className='h-3 w-auto' src={tailwindLogo} alt='tailwind logo' />
        </a>
      </div>

    </>
  )
}

export default SitePoweredBy
