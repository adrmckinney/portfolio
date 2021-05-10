import { DatabaseIcon, UserGroupIcon, DesktopComputerIcon, BriefcaseIcon } from '@heroicons/react/outline'
import SiteUnderConstruction from '../../alerts/SiteUnderConstruction'
import useHover from '../customComponents/useHover'

const FEATURES = [
  {
    name: 'UX',
    description:
      'My client was finding it difficult to spread the word about the sessions that she offers. She needed a site to display information and to allow users to signup for sessions. I built a site that is clean and informative, allowing users to browse for information, register for sessions, and contact my client with questions.',
    icon: UserGroupIcon
  },
  {
    name: 'Admin Workstation',
    description:
      'My client needed an easier way to keep track of people who are interested in signing up for sessions and an easy way to update the site with new sessions. I created a session registration database that allows my client to easily email registrants and update their accounts. This site has many forms my client can use to quickly update the site on her own.',
    icon: BriefcaseIcon
  },
  {
    name: 'Front End',
    description:
      'I built the front end with React and deployed on Netlify. I used a few libraries for styling and logistics: Tailwindcss, React Datepicker, Moment.js. I built templates on the front end to use for Djoser\'s password and username reset features. Users are able to experience the site on mobile; full mobile utility is still in the works for admin.',
    icon: DesktopComputerIcon
  },
  {
    name: 'Back End',
    description:
      'I built the API with Django REST Framework. I used Djoser for authentication and password and username resets. I deployed through Heroku and use the Mailgun add-on to send emails to registrants when they sign up for sessions.',
    icon: DatabaseIcon
  }
]

export default function WhiteTalk () {
  const [hoverRef, isHovered] = useHover()

  const handleHover = () => {
    if (isHovered) {
      return (
        <div
          ref={hoverRef}
          className='col-span-1 flex flex-col text-center bg-blueGray-700 transition duration-500 ease-in-out rounded-lg shadow divide-y divide-gray-200 w-auto h-52 z-20'
        >
          <div className='flex flex-col justify-around p-4 h-full text-white'>
            {/* <p>Make custom greeting cards for any occasion</p> */}
            {/* <span className='flex justify-around'>
              <div>
                <h5 className='font-semibold border-b-2 border-blueGray-400'>Front End</h5>
                <span className='flex space-x-2'>
                  <span className='flex flex-col items-center'>
                    <p className='text-blue-400'>React</p>
                    <p className='text-blue-400'>Axios</p>
                    <p className='text-blue-400'>Tailwind</p>
                  </span>
                  <span className='flex flex-col items-center'>
                    <p className='text-blue-400'>Moment.js</p>
                    <p className='text-blue-400'>React Datepicker</p>
                  </span>
                </span>
              </div>
              <div>
                <h5 className='font-semibold border-b-2 border-blueGray-400'>Back End</h5>
                <p className='font-light'>Django</p>
                <p className='font-light'>REST</p>
                <p className='font-light'>Djoser</p>
              </div>
            </span> */}
            <span className='flex justify-evenly space-x-2 sm:space-x-0'>
              <a
                href='https://whitetalk.netlify.app/'
                rel='noreferrer'
                target='_blank'
                type='button'
                className='inline-flex items-center justify-around px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-gray-800 hover:text-white bg-lightVermilion hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Visit Site
                <svg className='w-6 h-6 animate-pulse' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fillRule='evenodd' d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                  <path fillRule='evenodd' d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                </svg>
              </a>
              <a
                href='https://github.com/adrmckinney/white-talk'
                rel='noreferrer'
                target='_blank'
                type='button'
                className='inline-flex items-center justify-around px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-gray-800 hover:text-white bg-lightVermilion hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                See FE Code
                <svg className='w-6 h-6 animate-pulse' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fillRule='evenodd' d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                  <path fillRule='evenodd' d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                </svg>
              </a>
              <a
                href='https://github.com/adrmckinney/white-talk-api'
                rel='noreferrer'
                target='_blank'
                type='button'
                className='inline-flex items-center justify-around px-2 py-1 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-gray-800 hover:text-white bg-lightVermilion hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                See BE Code
                <svg className='w-6 h-6 animate-pulse' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path fillRule='evenodd' d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                  <path fillRule='evenodd' d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                </svg>
              </a>
            </span>
          </div>
        </div>
      )
    }
    return (
      <div ref={hoverRef} className='bg-whiteTalk bg-cover bg-center w-auto h-52' />
    )
  }

  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <span className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2'>
          <div className='lg:text-center'>
            <p className='mt-2 text-3xl text-center md:text-left leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Racial Equity White Talk
            </p>
            <p className='mt-4 max-w-2xl text-xl text-center md:text-left text-gray-500 lg:mx-auto'>
              Racial Equity White Talk is a site where white people can sign up to have authentic and uncomfortable conversations about racism and whiteness.
            </p>
            <p className='mt-4 max-w-2xl text-xl text-center md:text-left text-red-700 font-bold lg:mx-auto'>
              Please Note: This site is in testing mode. The code has not yet been scrubbed and there are still a lot of bugs to be fixed.
            </p>
          </div>
          <div className='lg:text-center border-4 p-1 border-gray-400 w-full md:w-1/2'>
            {handleHover()}
          </div>
        </span>

        <div className='mt-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {FEATURES.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-anitiqueFuchsia text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
