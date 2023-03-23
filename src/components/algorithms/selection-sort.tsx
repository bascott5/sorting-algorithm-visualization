import { useEffect } from "react";

export const SelectionSort = ({arr}) => {
    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            setArr(arr => {
                let arrCopy: number[] = [...arr];
                let minIndex = i;
                for (let j = i + 1; j < arr.length; j++) {
                    if (arrCopy[j] < arrCopy[minIndex]) {
                        minIndex = j;
                    }
                }
                if (minIndex !== i) {
                    [arrCopy[i], arrCopy[minIndex]] = [arrCopy[minIndex], arrCopy[i]];
                }

                return arrCopy;
            })
          }, 100 * (i + 1));
        }
    }, []);
}