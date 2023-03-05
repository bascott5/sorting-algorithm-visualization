import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

const SortingAlgorithm: React.FC = () => {
  const [arr, setArr] = useState([3, 1, 2, 5, 4]);
  const sortedArr = [1, 2, 3, 4, 5]

  useEffect(() => {
    //TODO: set interval for each individual loop so that the returned JSX represents this information
    const interval = setInterval(() => {
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
      ))
    }, 1000);

    if (arr == sortedArr) {
      return() => clearInterval(interval);
    }
  }, [])
}

export default SortingAlgorithm;