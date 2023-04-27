import { useEffect, useContext } from "react";
import { arrContext } from '../arr-context-provider';
import Visualizer from "../visualizer";

const InsertionSort: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
  console.log("Insertion Sort");

  useEffect(() => {
    for (let i = 1; i < arr.length; i++) {
      setTimeout(() => {
        setArr(arr => {
          let current = arr[i];
          let j = i - 1;
          while (j > -1 && current < arr [j]) {
            arr[j + 1] = arr[j];
            j--;
          }
          arr[j + 1] = current;

          return [...arr.slice()];
        })
      }, 100 * (i + 1));
    }
  }, []);

  return <Visualizer />
}

export default InsertionSort;