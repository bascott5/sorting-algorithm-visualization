import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'

const SortingAlgorithm: React.FC = () => {
  const [arr, setArr] = useState<number[]>([3, 1, 2, 5, 4]);
  let arrCopy: number[] = [...arr];

  //Selection sort
  useEffect(() => {
    while (arrCopy != arrCopy.sort()){
      for (let i = 0; i < arrCopy.length; i++) {
        setTimeout(() => {
        let minIndex: number = i;
        for (let j = i + 1; j < arrCopy.length; j++) {
          if (arrCopy[j] < arrCopy[minIndex]) {
            minIndex = j;
          }
        }
        let temp: number = arrCopy[i];
        arrCopy[i] = arrCopy[minIndex];
        arrCopy[minIndex] = temp;
        }, 1000);
      }
    }
    setArr([...arrCopy])
    console.log(arrCopy);
  }, []);
  
  return arr.map<JSX.Element>((keys) => 
    <div className='bars'>
      <svg key={keys.toString()}>
        <rect height={keys * 25} width={100 - (arr.length * 10)} x={arr.indexOf(keys) * 53} y={0}/>
      </svg>
    </div>
  )
}

export default SortingAlgorithm;