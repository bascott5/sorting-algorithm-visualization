import { useEffect } from "react";

const BubbleSort: React.FC = () => {
    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            setArr(arr => {
                let arrCopy: number[] = [...arr];
                for (let j= 0; j < arr.length - i - 1; j++) {
                    if (arrCopy[j] > arrCopy[j + 1]) {
                        let temp = arrCopy[j];
                        arrCopy[j] = arrCopy[j + 1];
                        arrCopy[j + 1] = temp;
                    }
                }
                return arrCopy;
            })
          }, 100 * (i + 1));
        }
    }, []);
}

export default BubbleSort;