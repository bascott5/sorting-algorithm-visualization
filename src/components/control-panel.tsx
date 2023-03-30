//TODO: Make i an exported variable then transfer it to the algorithms so it can be used for all? Make stack overflow post asking about this
import React, { useState, useEffect } from 'react';
import { SelectionSort } from './algorithms/selection-sort';
import { Randomize } from './randomize';

const ControlPanel: React.FC = () => {
  const [algorithm, setAlgorithm] = useState("");

  useEffect(() => {
    switch(algorithm) {
      case "selection sort":
        SelectionSort();
      default:
        Randomize();
    }
  }, [algorithm]);

  return (
    <div className='headerContainer'>
      <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
      <li className='list'>
        <ul><button className='button'>Bubble Sort</button></ul>
        <ul><button className='button'>Insertion Sort</button></ul>
        <ul><button className='button'>Merge Sort</button></ul>
        <ul><button className='button'>Quick Sort</button></ul>
        <ul><button className='button' onClick={() => setAlgorithm("selection sort")}>Selection Sort</button></ul>
        <ul><button className='button' onClick={() => {Randomize}}>Randomize</button></ul>
      </li>
    </div>
  )
}
  
export default ControlPanel;