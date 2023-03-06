import SortingAlgorithm from '@/components/sorting-algorithm'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const App: React.FC = () => {
  return(
    <div className='headerContainer'>
      <h1 style={{color:'black'}}>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
      <SortingAlgorithm />
    </div>
  )
}

export default App;