import React, { useEffect } from 'react';
import { useContext } from 'react';
import { SelectionSort } from './algorithms/selection-sort';
import { Randomize } from './randomize';
import { arrContext } from './arr-context-provider';

const ControlPanel: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);

  useEffect(() => {
    console.log("arr changed");
  }, [arr]);

  return (
    <div className='headerContainer'>
      <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
      <li className='list'>
        <ul><button className='button'>Bubble Sort</button></ul>
        <ul><button className='button'>Insertion Sort</button></ul>
        <ul><button className='button'>Merge Sort</button></ul>
        <ul><button className='button'>Quick Sort</button></ul>
        <ul><button className='button' onClick={() => setArr(SelectionSort)}>Selection Sort</button></ul>
        <ul><button className='button' onClick={() => setArr(Randomize)}>Randomize</button></ul>
      </li>
    </div>
  )
}
  
export default ControlPanel;