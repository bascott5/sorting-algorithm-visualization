import { useEffect, useContext } from "react";
import { arrContext } from '../arr-context-provider';
import Visualizer from "../visualizer";

const QuickSort: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
  console.log("Quick Sort");

  useEffect(() => {
    let j = 0;
    for (let i of quickSort(arr)) {
      if (arr == arr.sort()) break;

      setTimeout(() => {
        setArr(i);
      }, 1000 * (j + 1));
      j++;
    }
  }, []);

  function* quickSort(arr: number[], left = 0, right = arr.length - 1): Generator<number[], number[]> {
    if (left >= right) {
      return [...arr.slice()];
    }
        
    let pivotIndex = yield* partition(arr, left, right);
    yield* quickSort(arr, left, pivotIndex - 1);
    yield* quickSort(arr, pivotIndex + 1, right);

    return [...arr.slice()];
  }
  
  function* partition(arr: number[], left: number, right: number): Generator<number[]> {
    let pivotValue = arr[right];
    let partitionIndex = left;
  
    for (let i = left; i < right; i++) {
      yield [...arr.slice()];
      if (arr[i] < pivotValue) {
        yield* swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
  
    yield* swap(arr, right, partitionIndex);
    return partitionIndex;
  }
  
  function* swap(arr: number[], firstIndex: number, secondIndex: number): Generator<number[]> {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;

    yield [...arr.slice()];
  }

  return <Visualizer />
}

export default QuickSort;