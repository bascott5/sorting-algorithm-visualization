import React, { useEffect } from 'react';
import { AlgorithmLoader } from './algorithm-loader';

const ControlPanel: React.FC = () => {
  return (
    <div className='headerContainer'>
      <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
      <li className='list'>
        <ul><button className='button' >Bubble Sort</button></ul>
        <ul><button className='button' >Insertion Sort</button></ul>
        <ul><button className='button' >Merge Sort</button></ul>
        <ul><button className='button' >Quick Sort</button></ul>
        <ul><button className='button' onClick={() => <AlgorithmLoader algorithm={"selection sort"} />}>Selection Sort</button></ul>
        <ul><button className='button' onClick={() => <AlgorithmLoader algorithm={""} />}>Randomize</button></ul>
      </li>
    </div>
  )
}
  
export default ControlPanel;