import { useEffect, useContext } from "react";
import { arrContext } from "../arr-context-provider";
import Visualizer from "../visualizer";

const MergeSort = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Merge Sort");

    const merge = (left: any, right: any) => {
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift())
            }
        }
    }

    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            setArr(arr => {
                const mid = arr.length / 2;
                if (arr.length < 2) {
                    return [...arr.slice()];
                }

                const left = arr.splice(0, mid);
                return merge(MergeSort(left), MergeSort(arr))
            })
          }, 100 * (i + 1));
        }
    }, []);

    return <Visualizer />
}

export default MergeSort;