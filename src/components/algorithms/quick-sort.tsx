import { useEffect, useContext } from "react";
import { arrContext } from '../arr-context-provider';
import Visualizer from "../visualizer";

const QuickSort: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
  console.log("Quick Sort");

  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        setArr(arr => {
          if (arr.length <= 1) return arr;
          let pivot = arr[0];
          let left = arr.filter(x => x < pivot);
          let right = arr.filter(x => x > pivot);

          return [...left, pivot, ...right];
        })
      }, 100 * (i + 1));
    }
  }, []);

  return <Visualizer />
}

export default QuickSort;