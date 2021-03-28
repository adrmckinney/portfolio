import openMic from '../../images/new_logo_purple.jpg'

const ProjectOpenMic = () => {
  return (
    <>

      <li className='col-span-1 flex shadow-sm rounded-md h-40'>
        <div className='flex-shrink-0 flex items-center justify-center w-52 text-white text-sm font-medium rounded-l-md aspect-w-14 aspect-h-4'>
          <img src={openMic} alt='open mic' className='block w-auto h-auto rounded-l-lg' />
        </div>
        <div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md'>
          <div className='flex flex-col px-4 py-2 text-sm'>

            {/* about project */}
            <span className='flex'>
              {/* <p className='text-gray-900 font-medium mr-2'>About:</p> */}
              <p
                className='text-gray-900 font-medium'
                // id='wrap'
              >OpenMic is a musician’s app that makes it easy for bands to notify the community that they are looking for new members and for solo artists to find bands to join.
              </p>
            </span>

            {/* site name and link */}
            <span className='flex'>
              <p className='text-gray-900 font-medium mr-2'>View the Site:</p>
              <a
                href='https://open-mic.netlify.app'
                className='text-gray-900 font-medium hover:text-gray-600'
                rel='noreferrer'
                target='_blank'
              >https://open-mic.netlify.app
              </a>
            </span>

            {/* code link */}
            <span className='flex'>
              <p className='text-gray-900 font-medium mr-2'>View the Code:</p>
              <a
                href='https://open-mic.netlify.app'
                className='text-gray-900 font-medium hover:text-gray-600'
                rel='noreferrer'
                target='_blank'
              >https://open-mic.netlify.app
              </a>
            </span>

          </div>
        </div>
      </li>
    </>
  )
}

export default ProjectOpenMic
