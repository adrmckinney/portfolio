
const About = () => {
  return (
    <>
      <div class='bg-blue-600 pb-32 pt-24'>
        <header className='py-10'>
          <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <p className='text-white text-2xl'>
              About content Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis nostrum minus laborum? Nobis minus ex ratione doloremque consequatur accusamus at esse. Natus repudiandae possimus molestiae aliquam animi vel. Hic, ratione.
            </p>
          </div>
        </header>
      </div>

      <main class='-mt-32'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-6 h-3/4'>
          <div class='w-5/6 mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
            {/* <!-- Replace with your content --> */}
            <div class='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
              <div class='border-4 border-solid border-gray-200 rounded-lg h-96'>
                <div className='max-w-3xl mx-auto h-full divide-y-2 p-4 flex flex-col items-center bg-blue-700 bg-opacity-50'>
                  {/* <!-- Content goes here --> */}
                  <p className='text-coolGray-700 text-2xl'>Front End Languages</p>
                  <br />
                  <ul className='flex flex-col justify-evenly items-center h-full'>
                    <li className='text-coolGray-700'>HTML</li>
                    <li className='text-coolGray-700'>CSS</li>
                    <li className='text-coolGray-700'>JavaScript</li>
                    <li className='text-coolGray-700'>React</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>

          <div class='w-5/6 mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
            {/* <!-- Replace with your content --> */}
            <div class='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
              <div class='border-4 border-solid border-gray-200 rounded-lg h-96'>
                <div className='max-w-3xl mx-auto h-full divide-y-2 p-4 flex flex-col items-center bg-blue-700 bg-opacity-50'>
                  {/* <!-- Content goes here --> */}
                  <p className='text-coolGray-700 text-2xl'>Back End Languages</p>
                  <br />
                  <ul className='flex flex-col justify-evenly items-center h-full'>
                    <li className='text-coolGray-700'>Python</li>
                    <li className='text-coolGray-700'>Django</li>
                    <li className='text-coolGray-700'>Django REST Framework</li>
                    <li className='text-coolGray-700'>Djoser</li>
                    <li className='text-coolGray-700'>Django Registration Redux</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>

          <div class='w-5/6 mx-auto pb-12 px-4 sm:px-6 lg:px-8'>
            {/* <!-- Replace with your content --> */}
            <div class='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
              <div class='border-4 border-solid border-gray-200 rounded-lg h-96'>
                <div className='max-w-3xl mx-auto h-full divide-y-2 p-4 flex flex-col items-center bg-blue-700 bg-opacity-50'>
                  {/* <!-- Content goes here --> */}
                  <p className='text-coolGray-700 text-2xl'>Dev Tools</p>
                  <br />
                  <ul className='flex flex-col justify-evenly items-center h-full'>
                    <li className='text-coolGray-700'>Git/GitHub</li>
                    <li className='text-coolGray-700'>Netlify</li>
                    <li className='text-coolGray-700'>Heroku</li>
                    <li className='text-coolGray-700'>Axios</li>
                    <li className='text-coolGray-700'>AJAX</li>
                    <li className='text-coolGray-700'>Cmd line</li>
                    <li className='text-coolGray-700'>Charts.js</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>

        </div>
      </main>
    </>
  )
}

export default About
