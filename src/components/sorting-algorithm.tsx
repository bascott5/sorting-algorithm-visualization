import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

const SortingAlgorithm: React.FC = () => {
  //TODO: Find a way to make each loop run after every second (try getting the element by its id to transform it within the timeout?)
  const [arr, setArr] = useState<number[]>([3, 1, 2, 5, 4]);

  //Selection sort
  while (arr != arr.sort()) {
    useEffect(() => {
      for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
        let minIndex: number = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        let temp: number = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        
        //document.getElementById('bars')
        }, 1000);
      }
    }, []);
  }
  
  return arr.map<JSX.Element>((keys) => (
    <div className='barsContainer'>
      <svg id='bars' className='bars'>
        <rect height={keys * 25} width={100 - (arr.length * 10)} x={arr.indexOf(keys) * 53} y={0}/>
      </svg>
    </div>
  ))
}

export default SortingAlgorithm;

/*import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

const SortingAlgorithm: React.FC = () => {
  const [arr, setArr] = useState([3, 1, 2, 5, 4]);
  const sortedArr = [1, 2, 3, 4, 5]
    for (let n = 0; n < arr.length; n++) {
        for (let i = 0; i < arr.length; i++) {
          let minIndex: number = i;
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j;
            }
          }
          let temp: number = arr[i];
          arr[i] = arr[minIndex];
          arr[minIndex] = temp;
        }
      }
      return arr.map<JSX.Element>((keys) => (
        <div>
          <svg className='bars'>
            <rect height={keys * 25} width={50} x={-50} y={-50}/>
          </svg>
        </div>
      )
    }
}

export default SortingAlgorithm;*/