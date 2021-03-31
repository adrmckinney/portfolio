
const Home = () => {
  return (
    <>
      <div className='grid col-start-1 col-span-full mt-10 sm:mt-0 lg:mt-4 xl:mt-2 justify-center items-center animate__animated animate__fadeIn animate__slower animate_delay'>
        <p className='font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white'>WELCOME</p>
      </div>
      <div className='grid col-start-1 row-start-3 justify-center items-start sm:row-start-2 sm:justify-center sm:items-center sm:mt-14 md:mt-0 md:justify-center md:items-end md:ml-10 md:pb-4 md:mr-12 lg:mr-0 lg:pb-0 lg:justify-end xl:row-start-2 xl:items-end xl:mt-3'>
        <div className='animate__animated animate__fadeIn animate__slower animate_delay-1'>
          <p className='font-sans text-4xl mt-4 sm:mt-0 sm:text-4xl md:text-5xl lg:text-6xl text-white'>I'm Dan,&nbsp;</p>
        </div>
      </div>
      <div className='grid col-start-1 col-span-full row-start-3 justify-center items-center sm:justify-end sm:row-start-2 sm:items-end sm:pb-12 sm:mr-4 md:row-start-3 md:items-start md:pb-0 md:mr-10 lg:mr-8 xl:mr-2 xl:col-start-2 xl:justify-start xl:items-start xl:mt-8'>
        <div className='space-y-4 animate__animated animate__fadeIn animate__slower animate_delay-1'>
          <p className='hidden sm:block sm:font-sans sm:text-4xl md:text-5xl lg:text-6xl text-white'>a full-stack software engineer</p>
          <p className='sm:hidden text-4xl text-white text-center'>a full-stack</p>
          <p className='sm:hidden text-4xl text-white text-center'>software engineer</p>
        </div>
      </div>
      <div className='w-full'>
        <p className='text-white text-xs absolute right-6 bottom-2'>
          <a
            href='https://unsplash.com/@tma'
            rel='noreferrer'
            target='_blank'
          >Photo by: Tianyi Ma
          </a>
        </p>
      </div>
    </>
  )
}

export default Home
