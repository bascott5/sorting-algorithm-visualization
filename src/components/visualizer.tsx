import {useContext} from 'react'
import { arrContext } from "./arr-context-provider";

const Visualizer: React.FC = () => {
  const [arr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);

  return (
    <div>
      {
        arr.map<JSX.Element>(keys => 
          <svg className='bars' key={keys.toString()} viewBox={"0 0 500 500"}>
            <rect height={keys * 6} width={15} x={arr.indexOf(keys) * 20} y={0} />
          </svg>)
      }
    </div>
  )
}

export default Visualizer;