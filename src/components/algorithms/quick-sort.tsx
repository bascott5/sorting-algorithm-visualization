import { useEffect } from "react";

const QuickSort: React.FC = () => {
    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            setArr(arr => {
                let arrCopy: number[] = [...arr];
                if (arr.length <= 1) return arrCopy;
                let pivot = arrCopy[0];
                let left = arr.filter(x => x < pivot);
                let right = arr.filter(x => x > pivot);

                return [...left, pivot, ...right];
            })
          }, 100 * (i + 1));
        }
    }, []);
}

export default QuickSort;