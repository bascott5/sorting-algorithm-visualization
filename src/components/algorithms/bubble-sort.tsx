import { useEffect, useContext } from "react";
import { arrContext } from '../arr-context-provider';
import Visualizer from "../visualizer";

const BubbleSort: React.FC = () => {
    const [arr, setArr] = useContext<[number[], React.Dispatch<React.SetStateAction<number[]>>]>(arrContext);
    console.log("Bubble Sort");

    useEffect(() => {
        for (let i = 0; i < arr.length; i++) {
          setTimeout(() => {
            setArr(arr => {
                for (let j= 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
                return [...arr.slice()];
            })
          }, 100 * (i + 1));
        }
    }, []);

    return <Visualizer />
}

export default BubbleSort;