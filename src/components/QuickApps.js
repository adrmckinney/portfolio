import CovidChart from './quickApps/CovidChart'
import QuickAppsSectionHeader from './sectionHeaders/QuickAppsSectionHeader'
const QuickApps = () => {
  return (
    <>
      <QuickAppsSectionHeader />
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-6'>
        <CovidChart />
      </ul>

    </>
  )
}

export default QuickApps
