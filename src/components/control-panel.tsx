import { useReducer, useContext, useEffect } from "react";

const ControlPanel: React.FC = () => {
    return(
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

  /*function merge(left: any, right: any) {
    let arrCopy = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arrCopy.push(left.shift())
        }
    }
    }*/