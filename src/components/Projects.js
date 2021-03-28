import ProjectSectionHeader from './sectionHeaders/ProjectSectionHeader'
import ProjectOpenMic from '../components/projects/ProjectOpenMic'
import ProjectGreetly from './projects/ProjectGreetly'
import ProjectTriviaNight from './projects/ProjectTriviaNight'
import ProjectSnippets from './projects/ProjectSnippets'

const Projects = () => {
  return (
    <>
      <ProjectSectionHeader />
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-6'>
        <ProjectOpenMic />
        <ProjectGreetly />
        <ProjectTriviaNight />
        <ProjectSnippets />
      </ul>
    </>
  )
}

export default Projects
