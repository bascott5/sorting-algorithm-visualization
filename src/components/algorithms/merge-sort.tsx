import { useEffect } from "react";
import Visualizer from "../visualizer";

const MergeSort = () => {
    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            setArr(arr => {
                let arrCopy: number[] = [...arr];
                const mid = arr.length / 2;
                if (arr.length < 2) {
                    return arrCopy
                }

                const left = arrCopy.splice(0, mid);
                return merge(MergeSort(left), MergeSort(arrCopy))
            })
          }, 100 * (i + 1));
        }
    }, []);

    return <Visualizer />
}

function merge(left: any, right: any) {
    let arrCopy = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arrCopy.push(left.shift())
        }
    }
}