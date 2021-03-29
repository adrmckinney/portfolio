
const About = () => {
  return (
    <>
      <div className='bg-gradient-to-t from-blueGray-400 to-blue-500 pb-32 pt-8 sm:pt-12'>
        <header className='py-10'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <p className='text-white text-2xl'>
              I'm an educator, community organizer, and software developer. For the last 5 years, I coached youth on how to create and implement strategic plans to address barriers keeping them and their peers from academic success. I have been active in my community to fight for social change to address systemic racism. I recently completed a 16 week coding bootcamp at Momentum Learn . . . and I'm addicted. I'm now combining my interests and skills to create technical solutions to social barriers.
            </p>
          </div>
        </header>
      </div>

      <main className='-mt-32'>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-6 h-3/4'>
          <div className='w-5/6 mx-auto pb-12 px-4 sm:px-0 md:px-2 lg:px-6 xl:px-8'>

            <div className='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
              <div className='border-4 border-solid border-gray-200 rounded-lg h-96'>
                <div className='max-w-3xl mx-auto h-full divide-y-2 p-4 flex flex-col items-center bg-blue-700 bg-opacity-50'>

                  <p className='text-coolGray-700 text-2xl text-center'>Front End Languages</p>
                  <br />
                  <ul className='flex flex-col justify-evenly items-center h-full'>
                    <li className='text-coolGray-700 text-center'>HTML</li>
                    <li className='text-coolGray-700 text-center'>CSS</li>
                    <li className='text-coolGray-700 text-center'>Tailwindcss</li>
                    <li className='text-coolGray-700 text-center'>JavaScript</li>
                    <li className='text-coolGray-700 text-center'>React</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div className='w-5/6 mx-auto pb-12 sm:px-0 md:px-2 lg:px-8'>
            {/* <!-- Replace with your content --> */}
            <div className='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
              <div className='border-4 border-solid border-gray-200 rounded-lg h-96'>
                <div className='max-w-3xl mx-auto h-full divide-y-2 p-4 flex flex-col items-center bg-blue-700 bg-opacity-50'>
                  {/* <!-- Content goes here --> */}
                  <p className='text-coolGray-700 text-2xl text-center'>Back End Languages</p>
                  <br />
                  <ul className='flex flex-col justify-evenly items-center h-full'>
                    <li className='text-coolGray-700 text-center'>Python</li>
                    <li className='text-coolGray-700 text-center'>Django</li>
                    <li className='text-coolGray-700 text-center'>Django REST Framework</li>
                    <li className='text-coolGray-700 text-center'>Djoser</li>
                    <li className='text-coolGray-700 text-center'>Django Registration Redux</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!-- /End replace --> */}
          </div>

          <div className='w-5/6 mx-auto pb-12 sm:px-0 md:px-2 lg:px-8 sm:col-span-2 md:col-span-1 '>
            {/* <!-- Replace with your content --> */}
            <div className='bg-white rounded-lg shadow px-5 py-6 sm:px-6'>
              <div className='border-4 border-solid border-gray-200 rounded-lg h-96'>
                <div className='max-w-3xl mx-auto h-full divide-y-2 p-4 flex flex-col items-center bg-blue-700 bg-opacity-50'>
                  {/* <!-- Content goes here --> */}
                  <p className='text-coolGray-700 text-2xl text-center'>Dev Tools</p>
                  <br />
                  <ul className='flex flex-col justify-evenly items-center h-full'>
                    <li className='text-coolGray-700 text-center'>Git/GitHub</li>
                    <li className='text-coolGray-700 text-center'>Netlify</li>
                    <li className='text-coolGray-700 text-center'>Heroku</li>
                    <li className='text-coolGray-700 text-center'>Axios</li>
                    <li className='text-coolGray-700 text-center'>AJAX</li>
                    <li className='text-coolGray-700 text-center'>Cmd line</li>
                    <li className='text-coolGray-700 text-center'>Charts.js</li>
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
