import Header from '@/components/header';
import SortingAlgorithm from '@/components/sorting-algorithm'
import { Inter } from 'next/font/google'

const App: React.FC = () => {
  return(
    <div className='container'>
      <Header />
      <SortingAlgorithm />
    </div>
  )
}

export default App;