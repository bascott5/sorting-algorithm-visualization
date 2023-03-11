import React, { Dispatch, SetStateAction } from 'react'

interface props {
    arr: number[],
    setArr?: Dispatch<SetStateAction<number[]>>
}

const Visualizer: React.FC<props> = ({arr, setArr}): any => {
    return arr.map<JSX.Element>((keys) => 
    <div>
      <svg className='bars' key={keys.toString()} viewBox={"0 0 500 500"}>
        <rect height={keys * 25} width={50} x={arr.indexOf(keys) * 53} y={0}/>
      </svg>
    </div>
  )
}

export default Visualizer;