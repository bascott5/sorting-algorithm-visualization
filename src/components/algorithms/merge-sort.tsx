//TODO: use a generator function to make the algorithm yield after every pass // https://hinsxd.dev/blog/sorting-visualizer#result-2---demo-using-svg
import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

type Merge = (arr1: number[], arr2: number[]) => number[];
type MergeSort = (arr: number[]) => number[];

const MergeSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Merge Sort");

    useEffect(() => {
      setArr(mergeSort(arr));
    }, []);

    const mergeSort: MergeSort = (arr: number[]) => {
      if (arr.length <= 1) return arr;
      let mid = Math.floor(arr.length / 2)
      let left: number[] = mergeSort(arr.slice(0, mid))
      let right: number[] = mergeSort(arr.slice(mid));

      return merge(left, right); 
    }
      
    const merge: Merge = (arr1: number[], arr2: number[]) => {
      let sorted: number[] = [];

      while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) sorted.push(arr1.shift() as number);
        else sorted.push(arr2.shift() as number);
      };

      return sorted.concat(arr1.slice().concat(arr2.slice()));
    }

    return <Visualizer />
}

export default MergeSort;