import { useEffect, useContext } from "react";
import { arrContext } from '../arr-context-provider';
import Visualizer from "../visualizer";

const QuickSort: React.FC = () => {
  const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
  console.log("Quick Sort");

  useEffect(() => {
    quickSort(arr);
  });

  const quickSort = (arr: number[], left = 0, right = arr.length - 1) => {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(() => {
        setArr(arr => {
          if (left >= right) {
            return [...arr.slice()];
          }
        
          let pivotIndex = partition(arr, left, right);
          quickSort(arr, left, pivotIndex - 1);
          quickSort(arr, pivotIndex + 1, right);
        
          return [...arr.slice()];
        });
      }, 100 * (i + 1));
    }
  }
  
  const partition = (arr: number[], left: any, right: any) => {
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
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
  }

  return <Visualizer />
}

export default QuickSort;