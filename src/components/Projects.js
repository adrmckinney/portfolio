import ProjectSectionHeader from './sectionHeaders/ProjectSectionHeader'
import ProjectOpenMic from '../components/projects/ProjectOpenMic'
import ProjectGreetly from './projects/ProjectGreetly'
import ProjectTriviaNight from './projects/ProjectTriviaNight'
import ProjectSnippets from './projects/ProjectSnippets'

const Projects = () => {
  return (
    <>
      <ProjectSectionHeader />
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 m-6'>
      <div className='flex flex-col'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-600 pb-4'>
            OpenMic
          </h2>
          <ProjectOpenMic />

      </div>
      <div className='flex flex-col'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-600 pb-4'>
            Greetly
          </h2>
        <ProjectGreetly />
      </div>
      <div className='flex flex-col'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-600 pb-4'>
            Trivia Night
          </h2>
          <ProjectTriviaNight />
      </div>
      <div className='flex flex-col'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-600 pb-4'>
            Snippets
          </h2>
          <ProjectSnippets />
      </div>
      </ul>
    </>
  )
}

export default Projects
