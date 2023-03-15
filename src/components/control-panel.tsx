import React, { useContext } from 'react'
import { arrContext, Action } from './arr-context-provider';

const ControlPanel: React.FC = () => {
  const [arr, dispatch] = useContext<[number[], React.Dispatch<Action>]>(arrContext);
    return (
      <div className='headerContainer'>
        <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
        <li className='list'>
            <ul><button className='button'>Bubble Sort</button></ul>
            <ul><button className='button'>Insertion Sort</button></ul>
            <ul><button className='button'>Merge Sort</button></ul>
            <ul><button className='button'>Quick Sort</button></ul>
            <ul><button className='button'>Selection Sort</button></ul>
            <ul><button className='button'>Reset</button></ul>
        </li>
      </div>
    )
  }
  
  export default ControlPanel;