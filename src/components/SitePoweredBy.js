import tailwindLogo from '../images/tailwindLogo.svg'
import reactLogo from '../images/reactLogo.svg'

const SitePoweredBy = ({ showSolidNav }) => {
  return (
    <div className='flex'>
      <a
        href='https://reactjs.org/'
        className='hover:bg-blueGray-100 px-3 py-2 rounded-md text-sm font-medium'
        rel='noreferrer'
        target='_blank'
      >
        <img className='h-8 w-auto' src={reactLogo} alt='react logo' />
      </a>

      <a
        className='hover:bg-blueGray-100 px-3 py-2 rounded-md text-sm font-medium self-center'
        href='https://tailwindcss.com/'
        rel='noreferrer'
        target='_blank'
      >
        <img className='h-3 w-auto' src={tailwindLogo} alt='tailwind logo' />
      </a>

    </div>
  )
}

export default SitePoweredBy
