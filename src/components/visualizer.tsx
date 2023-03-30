import React, {useContext, useRef} from 'react'
import { arrContext } from "./arr-context-provider";

//export const highlightRef = useRef<any>(null);

const Visualizer: React.FC = () => {
  const [arr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);

    return arr.map<JSX.Element>((keys) => 
    <div>
      <svg className='bars' key={keys.toString()} viewBox={"0 0 500 500"}>
        <rect height={keys * 12} width={45} x={arr.indexOf(keys) * 50} y={0} />
      </svg>
    </div>
  )
}

export default Visualizer;