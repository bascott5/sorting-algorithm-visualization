import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

const MergeSort = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Merge Sort");

    useEffect(() => {
      for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          mergeSort(arr);
        }, 100 * (i + 1));
      }
    }, [])

    const mergeSort: any = (arr: number[]) => {
      const mid = arr.length / 2;

      const left = arr.splice(0, mid);
      return merge(mergeSort(left), mergeSort(arr));
    }
      
      const merge = (left: any, right: any) => {
        setArr(arr => {
          arr = [];
          while (left.length && right.length) {
            if (left[0] < right[0]) {
              arr.push(left.shift());
            } else {
              arr.push(right.shift());
            }
          }

          return [...arr, ...left, ...right];
        })
      }

    return <Visualizer />
}

export default MergeSort;