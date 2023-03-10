import React, { useState } from 'react'
import Header from '@/components/header';
import SortingAlgorithm from '@/components/sorting-algorithm'

const App: React.FC = () => {
  const [arr, setArr] = useState<number[]>([3, 1, 2, 5, 4]);

  return(
    <div className='container'>
      <Header />
      <SortingAlgorithm arr={arr} setArr={setArr} />
    </div>
  )
}

export default App;