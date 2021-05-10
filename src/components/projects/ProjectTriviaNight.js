import useHover from '../customComponents/useHover'

const ProjectTriviaNight = () => {
  const [hoverRef, isHovered] = useHover()

  if (isHovered) {
    return (
      <li
        ref={hoverRef}
        className='col-span-1 flex flex-col text-center bg-blueGray-700 transition duration-500 ease-in-out rounded-lg shadow divide-y divide-gray-200 w-auto h-64 z-20'
      >
        <div className='flex flex-col justify-around p-4 h-full text-white'>
          <p>It's Trivia Night! Gather with friends, grab some drinks, get your teams, and play some trivia!</p>
          <span className='flex justify-around'>
            <div>
              <h5 className='font-semibold border-b-2 border-blueGray-400'>Front End</h5>
              <p className='text-blue-400'>React</p>
              <p className='text-blue-400'>Axios</p>
              <p className='text-blue-400'>Open Trivia DB API</p>
            </div>
          </span>
          <span className='flex justify-evenly'>
            <a
              href='https://trivia-night-adrm.netlify.app/'
              rel='noreferrer'
              target='_blank'
              type='button'
              className='inline-flex items-center justify-around px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-gray-800 hover:text-white bg-lightVermilion hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Visit Site
              <svg className='w-6 h-6 animate-pulse' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                <path fillRule='evenodd' d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
              </svg>
            </a>
            <a
              href='https://github.com/adrmckinney/trivia-night'
              rel='noreferrer'
              target='_blank'
              type='button'
              className='inline-flex items-center justify-around px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-gray-800 hover:text-white bg-lightVermilion hover:bg-vermilion focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              See Code
              <svg className='w-6 h-6 animate-pulse' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <path fillRule='evenodd' d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
                <path fillRule='evenodd' d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z' clipRule='evenodd' />
              </svg>
            </a>
          </span>
        </div>

      </li>
    )
  }

  return (
    <>
      <li
        ref={hoverRef}
        className='col-span-1 flex flex-col text-center bg-trivia bg-cover bg-right rounded-lg shadow divide-y divide-gray-200 w-auto h-64 z-20'
      >
        <p className='text-right mr-10 text-gray-300 text-md md:text-lg'>Trivia Night</p>
      </li>
    </>
  )
}

export default ProjectTriviaNight
