import FreelanceSectionHeader from './sectionHeaders/FreelanceSectionHeader'
import WhiteTalk from './freelanceProjects/WhiteTalk'
import BrickhouseProject from './freelanceProjects/BrickhouseProject'

const FreelanceProjects = () => {
  return (
    <>
      <FreelanceSectionHeader />
      <div className='divide-y-8'>
        <BrickhouseProject />
        <WhiteTalk />
      </div>
    </>
  )
}

export default FreelanceProjects
