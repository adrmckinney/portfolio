
const Home = () => {
  return (
    <>
      <div className='animate__animated animate__fadeIn animate__slower animate_delay mt-44 mb-20'>
        <p className='font-sans text-3xl sm:text-8xl text-white'>WELCOME</p>
      </div>
      <div className='flex'>
        <div className='flex h-52 w-52 justify-end md:justify-start md:w-auto'>
          <div className='animate__animated animate__fadeIn animate__slower animate_delay-1'>
            <p className='font-sans text-3xl sm:text-6xl text-white'>I'm Dan,&nbsp;</p>
          </div>
        </div>
        <div className='flex items-center h-52'>
          <div className='animate__animated animate__fadeIn animate__slower animate_delay-1'>
            <p className='font-sans text-3xl sm:text-6xl text-white'>a software engineer</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
