import { useEffect, useContext } from "react";
import { arrContext } from '../arr-context-provider';
import Visualizer from "../visualizer";

const QuickSort: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
  console.log("Quick Sort");

  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        return setArr(quickSort);
      }, 100);
    }
  }, []);

  const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
    console.log("quickSort")
    if (left >= right) {
      return [...arr.slice()];
    }
        
    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
        
    return [...arr.slice()];
  }
  
  const partition = (arr: number[], left: number, right: number) => {
    console.log("partition")
    let pivotValue = arr[right];
    let partitionIndex = left;
  
    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
  
    swap(arr, right, partitionIndex);
    return partitionIndex;
  }
  
  const swap = (arr: number[], firstIndex: number, secondIndex: number) => {
    console.log("swap")
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }

  return <Visualizer />
}

export default QuickSort;