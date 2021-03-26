import useHover from './useHover'

const CardHover = () => {
  const [hoverRef, isHovered] = useHover()
  return (
    <>
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-6'>
        <a
          href='https://open-mic.netlify.app'
          rel='noreferrer'
          target='_blank'
          className='z-30'
        >
          <li
            ref={hoverRef}
            className='col-span-1 flex flex-col text-center bg-openMic bg-cover bg-center rounded-lg shadow divide-y divide-gray-200 w-auto h-64 z-20'
          >
            {isHovered &&
              <div className='flex-1 flex flex-col p-8 z-0'>

                <span>
                  <h3 className='mt-6 text-gray-900 text-lg font-bold'>Connecting musicians in the area</h3>
                  <dl className='mt-1 flex-grow flex flex-col justify-between'>
                    <dt className='sr-only'>Title</dt>
                    <dd className='text-gray-500 text-sm'>Paradigm Representative</dd>
                    <dt className='sr-only'>Role</dt>
                    <dd className='mt-3'>
                      <span className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full'>Admin</span>
                    </dd>
                  </dl>
                </span>
              </div>}
          </li>
        </a>

        {/* <!-- More items... --> */}
      </ul>
    </>
  )
}

export default CardHover
