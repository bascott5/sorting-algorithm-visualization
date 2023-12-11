//TODO: use a generator function to make the algorithm yield after every pass // https://hinsxd.dev/blog/sorting-visualizer#result-2---demo-using-svg
import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

const MergeSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Merge Sort");

    useEffect(() => {
      let j = 0;
      for (let i of mergeSort(arr)) {
        setTimeout(() => {
          setArr(i);
        }, 100 * (j + 1));
        j++;
      }
    }, []);

    function* mergeSort(arr: number[]): Generator<number[], number[]> {
      let mid = Math.floor(arr.length / 2);
      yield arr;
      if (arr.length <= 1) return arr;

      let left: number[] = yield* mergeSort(arr.slice(0, mid));
      let right: number[] = yield* mergeSort(arr.slice(mid));

      return yield* merge(left, right);
    }
      
    function* merge(arr1: number[], arr2: number[]): Generator<number[]> {
      let sorted: number[] = [];

      function* push(arr: number[]) {
        yield arr1.concat(arr2);
        return sorted.push(arr.shift() as number);
      }

      while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) yield* push(arr1);
        else yield* push(arr2);
      };

      yield sorted.concat(arr1.slice().concat(arr2.slice()));
      return sorted.concat(arr1.slice().concat(arr2.slice()));
    }

    return <Visualizer />
}

export default MergeSort;

/*
//TODO: use a generator function to make the algorithm yield after every pass // https://hinsxd.dev/blog/sorting-visualizer#result-2---demo-using-svg
import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

const MergeSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Merge Sort");

    useEffect(() => {
      let j = 0;
      for (let i of mergeSort(arr)) {
        setTimeout(() => {
          setArr(i);
        }, 100 * (j + 1));
        j++;
      }
    }, []);

    function* mergeSort(arr: number[], i = 0, j = arr.length - 1): Generator<number[], number[]> {
      if (j <= 1) return arr;
      let mid = Math.floor((j - i) / 2) + i;
      console.log(j)

      yield* mergeSort(arr, i, mid);
      yield* mergeSort(arr, mid + 1, j);
      yield* merge(arr, i, mid, j);
  
      return arr;
    }
      
    function* merge(arr: number[], i: number, middle: number, j: number): Generator<number[]> {
      let left = i;
      let right = middle + 1;
      const sorted: number[] = [];

      function* push (index: number) {
        sorted.push(arr[index]);
      }

      while (left <= middle && right <= j) {
        if (arr[left] <= arr[right]) {
          yield* push(left);
          left++;
        } else {
          yield* push(right);
          right++;
        }
      }

      while (left <= middle) {
        yield* push(left);
        left++;
      }
      while (right <= j) {
        yield* push(right);
        right++;
      }

      for (let k = 0; k < sorted.length; k++) {
        arr[i + k] = sorted[k];
      }

      return arr;
    }

    return <Visualizer />
}

export default MergeSort;
*/