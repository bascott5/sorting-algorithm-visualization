import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

const SortingAlgorithm: React.FC = () => {
  const mappedArr = () => {
    return arr.map<JSX.Element>((keys) => (
      <div>
        <svg className='bars'>
          <rect height={keys * 25} width={50} x={0} y={0}/>
        </svg>
      </div>
    ))
  }
  
  const [arr, setArr] = useState<number[]>([3, 1, 2, 5, 4]);
  const oneSecond: number = 1000;

  useEffect(() => {
    let n: number = 0;
    let i: number = 0;
    let j: number = i + 1;
    let minIndex: number = i;
    
    if (n < arr.length) {
      setInterval(() => {
      n++;
        if (i < arr.length) {
          setInterval(() => {
            i++;
            minIndex = i;
            if (j < arr.length) {
              setInterval(() => {
                j++;
                if (arr[j] < arr[minIndex]) {
                  minIndex = j;
                }
              }, oneSecond)
            }
          }, oneSecond);
        }
        let temp: number = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }, oneSecond);
    }
    mappedArr();
  }, []);
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