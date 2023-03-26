import { useEffect } from "react";

export const SelectionSort = (arr: number[]) => {
    console.log("selection algorithm");

    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
                let minIndex = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
                }

                return [...arr.slice()];
          }, 100 * (i + 1));
        }
    }, []);
}