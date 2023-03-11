import React, { useState, useEffect } from 'react'
import Header from '@/components/header';
import SortingAlgorithm from '@/components/sorting-algorithm'

const App: React.FC = () => {
  //TODO: refactor code so that useReducer is used for the array rather than useState
  const [arr, setArr] = useState<number[]>([2, 3, 1, 5, 4]);
  
  /*useEffect(() => {
    for (let i = 0; i < 5; i++) {
      setArr(arr => {
          arr.unshift(Math.floor(Math.random() * 5) + 1);
          arr.pop();
          
          return arr;
      });
    }
  }, []);*/

  return(
    <div className='container'>
      <Header />
      <SortingAlgorithm arr={arr} setArr={setArr} />
    </div>
  )
}

export default App;