import CovidChart from './quickApps/CovidChart'
import HandAndFootScorecard from './quickApps/HandAndFootScorecard'
import QuickAppsSectionHeader from './sectionHeaders/QuickAppsSectionHeader'
const QuickApps = () => {
  return (
    <>
      <QuickAppsSectionHeader />
      <ul className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 m-6'>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-600 pb-4'>
            Hand and Foot Scorecard
          </h2>
          <HandAndFootScorecard />
        </div>
        <div className='flex flex-col'>
          <h2 className='text-2xl font-bold tracking-tight text-gray-600 pb-4'>Covid Chart</h2>
          <CovidChart />
        </div>
      </ul>
    </>
  )
}

export default QuickApps
