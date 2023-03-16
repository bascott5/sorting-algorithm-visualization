import React, { useContext } from 'react'
import { arrContext, Action } from './arr-context-provider';

const ControlPanel: React.FC = () => {
  const [arr, dispatch] = useContext<[number[], React.Dispatch<Action>]>(arrContext);
    return (
      <div className='headerContainer'>
        <h1 className='header'>🆂🅾🆁🆃🅸🅽🅶 🅰🅻🅶🅾🆁🅸🆃🅷🅼 🆅🅸🆂🆄🅰🅻🅸🆉🅴🆁</h1>
        <li className='list'>
            <ul><button className='button' onClick={() => dispatch({ type: "bubble sort" })}>Bubble Sort</button></ul>
            <ul><button className='button' onClick={() => dispatch({ type: "insertion sort" })}>Insertion Sort</button></ul>
            <ul><button className='button' onClick={() => dispatch({ type: "merge sort" })}>Merge Sort</button></ul>
            <ul><button className='button' onClick={() => dispatch({ type: "quick sort" })}>Quick Sort</button></ul>
            <ul><button className='button' onClick={() => dispatch({ type: "selection sort" })}>Selection Sort</button></ul>
            <ul><button className='button' onClick={() => dispatch({ type: "randomize" })}>Randomize</button></ul>
        </li>
      </div>
    )
  }
  
  export default ControlPanel;