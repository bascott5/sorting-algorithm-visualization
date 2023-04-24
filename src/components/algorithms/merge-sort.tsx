import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

const MergeSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Merge Sort");

    useEffect(() => {
      for (let i = 1; i < arr.length; i *= 2) {
        let arrCopy = [...arr.slice()];
        setTimeout(() => {
          setArr(arr => {
            for (let left = 0; left + i < arr.length; left += i * 2) {
              let right = left + i;
              let rend = right + i;
              if (rend > arr.length) {
                rend = arr.length;
              }
              let m = left;
              let k = left;
              let j = right;
              while (k < right && j < rend) {
                if (arr[k] <= arr[j]) {
                  arrCopy[m] = arr[k]; 
                  k++;
                } else {
                  arrCopy[m] = arr[j];
                  j++;
                }
                m++;
              }
              while (k < right) {
                arrCopy[m] = arr[k];
                k++;
                m++;
              }
              while (j < rend) {
                arrCopy[m] = arr[j];
                j++;
                m++;
              }
              for (m = left; m < rend; m++) {
                arr[m] = arrCopy[m];
              }

              return [...arr.slice()];
            }
          });
        }, 100 * (i + 1));
      }
    }, []);

    const mergeSort = (arr: number[]) => {
      for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          const mid: number = arr.length / 2;

          if (arr.length < 2) {
            return [...arr.slice()];
          }

          const left: number[] = arr.splice(0, mid);
          return merge(mergeSort(left), mergeSort(arr));
        }, 100 * (i + 1));
      }
    }
      
      const merge = (left: any, right: any) => {
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            arr.push(left.shift());
          } else {
            arr.push(right.shift());
          }
        }
  
        return [...arr.slice(), ...left.slice(), ...right.slice()];
      }

    return <Visualizer />
}

export default MergeSort;