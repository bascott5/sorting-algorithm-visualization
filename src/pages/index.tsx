import React, { useState, useEffect } from 'react'
import ControlPanel from '@/components/control-panel';
import SortingAlgorithm from '@/components/sorting-algorithm'
import Visualizer from '@/components/visualizer';

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
      <ControlPanel />
      <SortingAlgorithm arr={arr} setArr={setArr} />
    </div>
  )
}

export default App;