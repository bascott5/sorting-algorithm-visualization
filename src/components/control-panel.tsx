import { useState, useEffect, useContext } from "react";
import { arrContext } from './arr-context-provider';
import AlgorithmLoader from "./algorithm-loader"
import Randomize from "./randomize";
import logo from "../logo.png"

const ControlPanel: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
  const [algorithm, setAlgorithm] = useState("");
  
  useEffect(() => {
    setArr(Randomize(arr));
  }, [])

  const resetAlgorithm = (algorithm: string) => {
    setAlgorithm(algorithm);
      setTimeout(() => {
        setAlgorithm("");
      }, 1);
  }

  return (
    <div>
      <div className='headerContainer'>
        <img className='header' src={logo.src} height='115' width='293' alt='Logo'/>
        <li className='list'>
          <ul><button className='button' onClick={() => resetAlgorithm("bubble sort")}>Bubble Sort</button></ul>
          <ul><button className='button' onClick={() => resetAlgorithm("insertion sort")}>Insertion Sort</button></ul>
          <ul><button className='button' onClick={() => resetAlgorithm("selection sort")}>Selection Sort</button></ul>
          <ul><button className='button' onClick={() => setArr(Randomize(arr))}>Randomize</button></ul>
        </li>
      </div>
      <AlgorithmLoader algorithm={algorithm} />
    </div>
  )
}
  
export default ControlPanel;