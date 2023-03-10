import React, { useState, useEffect } from 'react'

const SortingAlgorithm: React.FC = () => {
  const [arr, setArr] = useState<number[]>([3, 1, 2, 5, 4]);

  //Selection sort
  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        setArr(arr => {
          let arrCopy: number[] = [...arr];
          let minIndex: number = i;
          for (let j = i + 1; j < arr.length; j++) {
            if (arrCopy[j] < arrCopy[minIndex]) {
              minIndex = j;
            }
          }
        let temp: number = arrCopy[i];
        arrCopy[i] = arrCopy[minIndex];
        arrCopy[minIndex] = temp;

        return arrCopy;
        })
      }, 100 * (i + 1))
    }
  }, [])

  return arr.map<JSX.Element>((keys) => 
    <div className='bars'>
      <svg key={keys.toString()}>
        <rect height={keys * 25} width={100 - (arr.length * 10)} x={arr.indexOf(keys) * 53} y={0}/>
      </svg>
    </div>
  )
}

export default SortingAlgorithm;