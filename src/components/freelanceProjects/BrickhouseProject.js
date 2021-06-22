import { UserGroupIcon, DesktopComputerIcon, ChatAltIcon } from '@heroicons/react/outline'
import useHover from '../customComponents/useHover'

const FEATURES = [
  {
    name: 'UX',
    description:
      'My client is a performer, educator, and consultant for urban dance and the traditions that surround it. To reflect his work and style, I built a site that is sleek and uses movement to arrive at each section. I implemented a parallax effect for the landing page, giving the impression of a variety of movement speeds. Including animation that was triggered on scroll became more difficult to implement because the parallex effect scrolls instead of the window. I therefore used the Intersection Observer API to determine when certain elements intersect with the viewport.',
    icon: UserGroupIcon
  },
  {
    name: 'Front End',
    description:
      'I built this site with React and deployed it on Netlify. I used Tailwindcss for styling and all animations. I used Lodash for scroll throttling to handle the document scrolling feature when the user clicks on a nav button. Because I used parallax effects throughout, I used IntersectionObserver to trigger navbar and other animation when components come into the viewport. The site contains a lot of images, which caused scrolling to lag and jump. To regain performance I resized many of the images using ImageMagick.',
    icon: DesktopComputerIcon
  },
  {
    name: 'Contact Form',
    description:
      'My client needed a way for people to get in touch with through his company 23rd & Hampton. I used EmailJS to set up users being able to email him through the contact form. I used Netlify\'s environment variables to securely store and access security keys.',
    icon: ChatAltIcon
  }
]

export default function WhiteTalk () {
  const [hoverRef, isHovered] = useHover()

  const handleHover = () => {
    if (isHovered) {
      return (
        <div
          ref={hoverRef}
          className='col-span-1 flex flex-col text-center bg-blueGray-700 transition duration-500 ease-in-out rounded-lg shadow divide-y divide-gray-200 w-auto h-full z-20'
        >
          <div className='flex flex-col justify-around p-4 h-full text-white'>
            <span className='flex justify-evenly space-x-2 sm:space-x-0'>
              <a
                href='https://juniousbrickhouse.netlify.app/'
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
                href='https://github.com/JuniousBrickhouse/brickhouseproject'
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
            </span>
          </div>
        </div>
      )
    }
    return (
      <div ref={hoverRef} className='bg-juniousBrickhouse bg-contain bg-no-repeat bg-center w-auto h-full' />
    )
  }

  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <span className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2'>
          <div className='lg:text-center'>
            <p className='mt-2 text-3xl text-center md:text-left leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Junious Brickhouse's Site
            </p>
            <p className='mt-4 max-w-2xl text-xl text-center md:text-left text-gray-500 lg:mx-auto'>
              Junious Brickhous is an educator, choreographer and cultural preservationist. This site allows users to learn about Junious' work, life journey, and to contact him.
            </p>
            <p className='mt-4 max-w-2xl text-xl text-center md:text-left text-red-700 font-bold lg:mx-auto'>
              Please Note: This site is still in development.
            </p>
          </div>
          <div className='lg:text-center border-4 p-1 border-gray-400 w-full md:w-1/2 h-56 md:h-40 lg:h-72'>
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
