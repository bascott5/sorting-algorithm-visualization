import { useState, useEffect, useContext } from "react";
import { arrContext } from './arr-context-provider';
import AlgorithmLoader from "./algorithm-loader"
import Randomize from "./randomize";

interface ChildProps {
  children: React.ReactElement;
}

const ControlPanel: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
  const [algorithm, setAlgorithm] = useState("");
  
  useEffect(() => {
    setArr(Randomize(arr));
  }, [])

  return (
    <div>
      <div className='headerContainer'>
        <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
        <li className='list'>
          <ul><button className='button'>Bubble Sort</button></ul>
          <ul><button className='button'>Insertion Sort</button></ul>
          <ul><button className='button'>Merge Sort</button></ul>
          <ul><button className='button'>Quick Sort</button></ul>
          <ul><button className='button' onClick={() => setAlgorithm("selection sort")}>Selection Sort</button></ul>
          <ul><button className='button' onClick={() => setArr(Randomize(arr))}>Randomize</button></ul>
        </li>
      </div>
      <AlgorithmLoader algorithm={algorithm}/>
    </div>
  )
}
  
export default ControlPanel;