import React, { Dispatch, SetStateAction } from 'react'

interface props {
    arr: number[],
    setArr?: Dispatch<SetStateAction<number[]>>
}

const Visualizer: React.FC<props> = ({arr, setArr}): any => {
    return arr.map<JSX.Element>((keys) => 
    <div className='bars'>
      <svg key={keys.toString()}>
        <rect height={keys * 25} width={100 - (arr.length * 10)} x={arr.indexOf(keys) * 53} y={0}/>
      </svg>
    </div>
  )
}

export default Visualizer;