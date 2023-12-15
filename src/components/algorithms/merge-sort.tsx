import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

const MergeSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    let steps: number[][] = [];
    console.log("Merge Sort");

    useEffect(() => {
      for (let i of mergeSort(arr)) {
        steps.splice(-1, 0, i);
      }

      for (let i = 0; i < steps.length - 1; i++) {
        if (steps[i].toString() != arr.sort().toString()) {
          setTimeout(() => {
            setArr(steps[i]);
          }, 50 * (i))
        } else {
          break;
        }
      }
    }, []);

    function* merge(arr: number[], left: number, middle: number, right: number): Generator<number[]> { 
      let l1 = middle - left + 1; 
      let l2 = right - middle; 
      let arr1 = new Array(l1); 
      let arr2 = new Array(l2);
        
      for (let i = 0; i < l1; ++i) { 
          arr1[i] = arr[left + i]; 
      } 
      for (let i = 0; i < l2; ++i) { 
          arr2[i] = arr[middle + 1 + i]; 
      } 
    
      let i = 0, j = 0, k = left; 

      while (i < l1 && j < l2) { 
        yield [...arr.slice()];
          if (arr1[i] < arr2[j]) { 
              arr[k] = arr1[i]; 
              ++i;
          } else { 
              arr[k] = arr2[j]; 
              j++; 
          } 
          k++; 
      }
      
      while (i < l1) { 
          arr[k] = arr1[i]; 
          i++; 
          k++;
      }
      
      while (j < l2) {
        arr[k] = arr2[j];
        j++;
        k++
      }
  
      yield [...arr.slice()]
      //return arr;
  } 
    
  function* mergeSort(arr: number[], left = 0, right = arr.length - 1): Generator<number[], number[]> { 
      if (left >= right) { 
          return [...arr.slice()]; 
      } 
      let middle = left + Math.floor((right - left) / 2); 
        
      yield* mergeSort(arr, left, middle); 
      yield* mergeSort(arr, middle + 1, right); 
        
      yield [...arr.slice()];
      return yield* merge(arr, left, middle, right); 
  } 

    return <Visualizer />
}

export default MergeSort;