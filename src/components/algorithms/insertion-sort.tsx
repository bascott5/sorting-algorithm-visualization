import { useEffect } from "react";

const InsertionSort: React.FC = () => {
    useEffect(() => {
        for (let i = 1; i < arr.length; i++) {
          setTimeout(() => {
            setArr(arr => {
                let arrCopy: number[] = [...arr];
                let current = arrCopy[i];
                let j = i - 1;
                while (j > -1 && current < arrCopy [j]) {
                    arrCopy[j + 1] = arrCopy[j];
                    j--;
                }
                arrCopy[j + 1] = current;

                return arrCopy;
            })
          }, 100 * (i + 1));
        }
    }, []);
}

export default InsertionSort;