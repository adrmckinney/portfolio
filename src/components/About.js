
const About = () => {
  return (
    <>
      <div className='text-white'>
        About content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nostrum minus laborum? Nobis minus ex ratione doloremque consequatur accusamus at esse. Natus repudiandae possimus molestiae aliquam animi vel. Hic, ratione.
      </div>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-6 h-3/4'>
        <div className='col-span-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
          {/* <!-- We've used 3xl here, but feel free to try other max-widths based on your needs --> */}
          <div className='max-w-3xl mx-auto h-full divide-y-2'>
            {/* <!-- Content goes here --> */}
            <p className='text-coolGray-400 text-2xl'>Front End Languages</p>
            <ul className='flex flex-col justify-evenly items-center h-full'>
              <li className='text-coolGray-400'>HTML</li>
              <li className='text-coolGray-400'>CSS</li>
              <li className='text-coolGray-400'>JavaScript</li>
              <li className='text-coolGray-400'>React</li>

            </ul>
          </div>
        </div>

        <div className='col-span-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
          {/* <!-- We've used 3xl here, but feel free to try other max-widths based on your needs --> */}
          <div className='max-w-3xl mx-auto h-full'>
            {/* <!-- Content goes here --> */}
            <p className='text-coolGray-400 text-2xl'>Back End Languages</p>
            <ul className='flex flex-col justify-evenly items-center h-full'>
              <li className='text-coolGray-400'>Python</li>
              <li className='text-coolGray-400'>Django</li>
              <li className='text-coolGray-400'>Django REST Framework</li>
              <li className='text-coolGray-400'>Djoser</li>
              <li className='text-coolGray-400'>Django Registration Redux</li>
            </ul>
          </div>
        </div>

        <div className='col-span-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
          {/* <!-- We've used 3xl here, but feel free to try other max-widths based on your needs --> */}
          <div className='max-w-3xl mx-auto h-full'>
            {/* <!-- Content goes here --> */}
            <p className='text-coolGray-400 text-2xl'>Dev Tools</p>
            <ul className='flex flex-col justify-evenly items-center h-full'>
              <li className='text-coolGray-400'>Git/GitHub</li>
              <li className='text-coolGray-400'>Netlify</li>
              <li className='text-coolGray-400'>Heroku</li>
              <li className='text-coolGray-400'>Axios</li>
              <li className='text-coolGray-400'>AJAX</li>
              <li className='text-coolGray-400'>Cmd line</li>
              <li className='text-coolGray-400'>Charts.js</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
