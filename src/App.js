import './App.css'
import Header from './components/Header'
import Experience from './components/Experience'

function App () {
  return (
    <div className='App h-screen'>
      <Header />
      <div className='bg-gray-900 h-full flex flex-col sm:flex-row p-4'>
        <Experience />
      </div>
    </div>
  )
}

export default App
