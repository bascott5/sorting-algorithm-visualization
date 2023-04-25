import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

const MergeSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Merge Sort");

    useEffect(() => {
      mergeSort(arr);
    }, []);

    const mergeSort = (arr: number[]) => {
      for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
          setArr(arr => {
            const mid: number = arr.length / 2;

            if (arr.length < 2) {
              return [...arr.slice()];
            }

            const left: number[] = arr.splice(0, mid);
            merge(mergeSort(left), mergeSort(arr));

            return [...arr.slice()];
          })
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