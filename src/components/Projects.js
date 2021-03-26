import ProjectSectionHeader from './sectionHeaders/ProjectSectionHeader'
import CardHover from './CardHover'
import ProjectGreetly from './projects/ProjectGreetly'
import ProjectOpenMic from './projects/ProjectOpenMic'

const Projects = () => {
  return (
    <>
      <ProjectSectionHeader />
      {/* <CardHover /> */}
      <div className='py-20 mx-20'>
        <ul className='mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <ProjectOpenMic />
          <ProjectGreetly />
        </ul>
      </div>
    </>
  )
}

export default Projects
