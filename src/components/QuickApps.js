import CovidChart from './quickApps/CovidChart'
import HandAndFootScorecard from './quickApps/HandAndFootScorecard'
import QuickAppsSectionHeader from './sectionHeaders/QuickAppsSectionHeader'
const QuickApps = () => {
  return (
    <>
      <QuickAppsSectionHeader />
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-6'>
        <HandAndFootScorecard />
        <CovidChart />
      </ul>
    </>
  )
}

export default QuickApps
