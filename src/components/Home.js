
const Home = () => {
  return (
    <>
      <div className='animate__animated animate__fadeIn animate__slower animate_delay absolute top-24'>
        <p className='font-sans text-3xl sm:text-8xl text-white'>WELCOME</p>
      </div>
      <div className='flex absolute bottom-20'>
        <div className='flex h-52 w-52 justify-end md:justify-start md:w-auto'>
          <div className='animate__animated animate__fadeIn animate__slower animate_delay-1'>
            <p className='font-sans text-3xl sm:text-6xl text-white'>I'm Dan,&nbsp;</p>
          </div>
        </div>
        <div className='flex items-center h-52'>
          <div className='animate__animated animate__fadeIn animate__slower animate_delay-1'>
            <p className='font-sans text-3xl sm:text-6xl text-white'>a full-stack software engineer</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-white text-sm absolute right-6 bottom-2'>Photo by: Tianyi Ma</p>
      </div>
    </>
  )
}

export default Home
