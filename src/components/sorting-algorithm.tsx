import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react'

const SortingAlgorithm: React.FC = () => {
  const [arr, setArr] = useState<number[]>([3, 1, 2, 5, 4]);
  let arrCopy: number[] = [...arr];

  //Selection sort
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
      }, 1000);
    }
    
    console.log(arr);
  }, [arr])

  /*while (arr != arr.sort()) {
    useEffect(() => {
      for (let i = 0; i < arr.length; i++) {
        const loop = setTimeout(() => {
        let minIndex: number = i;
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] < arr[minIndex]) {
            minIndex = j;
          }
        }
        let temp: number = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        }, 1000);
      }
    }, []);
  }*/


  
  return arr.map<JSX.Element>((keys) => 
    <div className='bars'>
      <svg key={keys.toString()}>
        <rect height={keys * 25} width={100 - (arr.length * 10)} x={arr.indexOf(keys) * 53} y={0}/>
      </svg>
    </div>
  )
}

export default SortingAlgorithm;